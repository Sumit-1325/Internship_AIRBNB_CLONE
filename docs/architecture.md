# Production Architecture — Reasoning

Companion to `architecture.svg` / `architecture.png`.

**Scope reminder.** The submission implements only the **Next.js frontend + local mock data**.
Everything else here describes the production system that frontend would sit inside. None of it is
built, and the diagram exists to show *where* the clone's frontend would attach and *why* the pieces
around it are shaped the way they are.

---

## The paths through the system

### 1. Request path (synchronous)

```
Browser → Edge (CDN) → Next.js (SSR/ISR) → API Gateway → domain service → data store
```

A listing page is the read-heavy case: it is rendered on the server, cached at the edge as ISR
output, and revalidated on a timer. The browser rarely reaches a service at all for a first paint.

### 2. Booking path (the one that must not lose data)

```
Bookings → PostgreSQL (primary) → commit
              │
              └── CDC → Kafka → indexer → OpenSearch
                               → notifications
                               → ledger
```

A booking is one transaction against PostgreSQL. Everything downstream — search index, emails,
payout ledger — is derived from the committed event, never from a parallel write. That ordering is
the whole point: if a notification fails, the booking still exists; if the index is wrong, it can be
rebuilt from the event log.

### 3. Search path

```
Browser → Next.js → Search Service → OpenSearch
```

OpenSearch is a **derived** store. It is fed only from the Kafka stream, so it is disposable: wipe
it, replay the stream, and it is correct again. Nothing authoritative ever lives in it.

### 4. Media path

```
Listings → object storage → image CDN → edge cache
```

Uploads are immutable and content-hashed, which is what makes the edge cache safe to keep forever
and why resizing happens on demand at the edge rather than at upload time.

### 5. Read scaling

```
PostgreSQL (primary) ──replication──► read replicas
Services ──► Redis
```

Browse traffic outnumbers write traffic by orders of magnitude, so reads go to replicas and hot
reads go to Redis. The primary is reserved for writes, which keeps its lock contention predictable.

---

## Why these choices, briefly

| Decision | Reasoning |
| --- | --- |
| PostgreSQL as the single source of truth | Bookings need transactions and constraints. A search index or cache can be wrong and repaired; a double-booked calendar cannot. |
| Services split by domain, not by layer | Bookings, Payments and Messaging fail and scale differently from catalogue reads. Isolating them stops a payment incident from taking down browsing. |
| Kafka between write and derived data | Decouples the commit from reindexing, notifications and payout retries. Consumers can be replayed independently. |
| Redis in front of Postgres | Absorbs the read burst a popular listing generates and holds session and rate-limit state that does not belong in the database. |
| Image variants at the edge | Photos are large, immutable and repeated across users; transforming once at the edge beats transforming per request. |
| Payments and Messaging as separate services | PCI scope and delivery guarantees are their own problems. Keeping them out of the booking path limits blast radius. |

---

## Multi-region

The edge is global. Stateless services run **active-active** across two regions behind geo-routed
DNS. PostgreSQL runs a **single primary** in one region with cross-region read replicas; on failure
a replica is promoted. This is a deliberate trade: a single write region keeps booking transactions
consistent, at the cost of write latency for users far from it. A multi-primary setup was rejected
because conflict resolution on a shared calendar is far more expensive than the latency it saves.

---

## Deliberately omitted

Fraud/risk scoring, tax/VAT handling, MLS-style listing ingestion, data warehouse/analytics, and a
recommendation service. Each is real at Airbnb scale, but none of them change the data flow the
diagram is trying to explain, so they are left out rather than padding the picture with boxes.
