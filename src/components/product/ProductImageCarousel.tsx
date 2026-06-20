"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageCarouselProps {
  images: string[];
  productTitle: string;
}

export default function ProductImageCarousel({
  images,
  productTitle,
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={images[activeIndex]}
          alt={`${productTitle} — image ${activeIndex + 1} of ${images.length}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3" role="tablist" aria-label="Product images">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`View image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`relative size-16 shrink-0 overflow-hidden rounded-md ring-2 transition-colors ${
                index === activeIndex
                  ? "ring-brand-600"
                  : "ring-transparent hover:ring-slate-300"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}