import { useSyncExternalStore } from "react";

const STORAGE_KEY = "listing.saved";
const CHANGE_EVENT = "listing-saved-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

function getServerSnapshot() {
  return false;
}

export function useSavedListing() {
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleSaved() {
    window.localStorage.setItem(STORAGE_KEY, saved ? "0" : "1");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return { saved, toggleSaved };
}
