"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 10,
}: QuantitySelectorProps) {
  function decrement() {
    onChange(Math.max(min, quantity - 1));
  }

  function increment() {
    onChange(Math.min(max, quantity + 1));
  }

  return (
    <div
      className="inline-flex items-center rounded-md border border-slate-300"
      role="group"
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex size-9 items-center justify-center text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <Minus className="size-4" aria-hidden="true" />
      </button>

      <span
        className="flex w-10 items-center justify-center text-sm font-semibold text-foreground"
        aria-live="polite"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex size-9 items-center justify-center text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <Plus className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}