"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils/formatPrice";

interface PriceRangeFilterProps {
  min: number;
  max: number;
  defaultMin: number;
  defaultMax: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeFilter({
  min,
  max,
  defaultMin,
  defaultMax,
  onChange,
}: PriceRangeFilterProps) {

  const [localMax, setLocalMax] = useState(max);
  const [previousMax, setPreviousMax] = useState(max);

  if (max !== previousMax) {
    setPreviousMax(max);
    setLocalMax(max);
  }

  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-foreground">
        Price Range
      </legend>
      <input
        type="range"
        min={defaultMin}
        max={defaultMax}
        step={10}
        value={localMax}
        onChange={(event) => setLocalMax(Number(event.target.value))}
        onMouseUp={() => onChange(min, localMax)}
        onTouchEnd={() => onChange(min, localMax)}
        onKeyUp={() => onChange(min, localMax)}
        className="w-full accent-brand-600"
        aria-label="Maximum price"
      />
      <div className="mt-1 flex justify-between text-xs text-foreground/50">
        <span>{formatPrice(defaultMin)}</span>
        <span>{formatPrice(localMax)}</span>
      </div>
    </fieldset>
  );
}