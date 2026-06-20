import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function RatingStars({
  rating,
  reviewCount,
  size = "sm",
}: RatingStarsProps) {
  const starSize = size === "sm" ? "size-3.5" : "size-4";
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-1.5">
      <div
        className="flex items-center"
        role="img"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`${starSize} ${
              index < rounded
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      {typeof reviewCount === "number" && (
        <span className="text-xs text-foreground/50">({reviewCount})</span>
      )}
    </div>
  );
}