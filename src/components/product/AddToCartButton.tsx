"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

interface AddToCartButtonProps {
  onAddToCart?: () => void;
  className?: string;
}

export default function AddToCartButton({
  onAddToCart,
  className = "",
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    onAddToCart?.();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors ${
        added
          ? "bg-green-600 hover:bg-green-700"
          : "bg-brand-600 hover:bg-brand-700"
      } ${className}`}
    >
      {added ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="size-4" aria-hidden="true" />
          Add to Cart
        </>
      )}
    </button>
  );
}