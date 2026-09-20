import {
  ratingCategories,
  reviews,
  showAllReviewsLabel,
} from "@/data/reviews";
import { RatingBreakdown } from "./RatingBreakdown";
import { RatingCategory } from "./RatingCategory";
import { RatingSummary } from "./RatingSummary";
import { ReviewCard } from "./ReviewCard";
import { ReviewCategoryChips } from "./ReviewCategoryChips";

export function ReviewsSection() {
  const categories = ratingCategories.filter(
    (category) => category.id !== "overall",
  );

  return (
    <section
      id="reviews"
      className="mt-[64px] scroll-mt-[83px] border-t border-line-soft pt-[48px]"
    >
      <h2 className="sr-only">Reviews</h2>

      <RatingSummary />

      <div className="mt-[48px] grid grid-cols-7 gap-[24px]">
        <RatingBreakdown />
        {categories.map((category) => (
          <RatingCategory key={category.id} category={category} />
        ))}
      </div>

      <ReviewCategoryChips />

      <div className="mt-[32px] grid grid-cols-2 gap-x-[32px] gap-y-[32px]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button
        type="button"
        className="mt-[32px] rounded-control border border-ink px-[23px] py-[13px] text-[16px] font-semibold text-ink transition-colors hover:bg-surface-muted"
      >
        {showAllReviewsLabel}
      </button>
    </section>
  );
}
