import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { ListingHeader } from "./ListingHeader";
import { ListingSummary } from "./ListingSummary";
import { GuestFavourite } from "./GuestFavourite";
import { HostSection } from "./HostSection";
import { Highlights } from "./Highlights";
import { TranslationBanner } from "./TranslationBanner";
import { Description } from "./Description";
import { SleepingArrangements } from "./SleepingArrangements";
import { Amenities } from "./Amenities";
import { TripDateBlock } from "./TripDateBlock";
import { ThingsToKnow } from "./ThingsToKnow";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { LocationSection } from "@/components/location/LocationSection";
import { MeetYourHost } from "./MeetYourHost";
import { NearbyListings } from "@/components/nearby/NearbyListings";
import { StickyListingNav } from "@/components/navigation/StickyListingNav";
import { PromotionCard } from "@/components/booking/PromotionCard";
import { BookingCard } from "@/components/booking/BookingCard";
import { ReportListing } from "./ReportListing";

const container =
  "mx-auto w-full max-w-listing px-6 lg:w-[min(73.6%,1400px)] lg:max-w-none lg:px-0";
const columns =
  "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_34.21%] lg:gap-x-[7.571%]";

export function ListingPage() {
  return (
    <main id="main">
      <div className={container}>
        <ListingHeader />
        <PhotoGallery />
      </div>

      <div className={container}>
        <div className={columns}>
          <div className="min-w-0">
            <ListingSummary />
          </div>

          <aside className="hidden lg:block" aria-label="Promotion">
            <div className="mt-[53px]">
              <PromotionCard />
            </div>
          </aside>
        </div>
      </div>

      <StickyListingNav />

      <div className={container}>
        <div className={columns}>
          <div className="min-w-0">
            <GuestFavourite />
            <HostSection />
            <Highlights />
            <TranslationBanner />
            <Description />
            <SleepingArrangements />
            <Amenities />
            <TripDateBlock />
          </div>

          <aside className="hidden lg:block" aria-label="Reservation">
            <div className="sticky top-[107px]">
              <BookingCard />
              <ReportListing />
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-2">
            <ReviewsSection />
          </div>
        </div>

        <LocationSection />
        <MeetYourHost />
        <ThingsToKnow />
        <NearbyListings />
      </div>
    </main>
  );
}
