"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils/formatPrice";
import RatingStars from "@/components/product/RatingStars";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-square w-full bg-slate-100"
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <Link href={`/product/${product.id}`} className="hover:underline">
          <h3 className="text-sm font-semibold text-foreground">
            {product.title}
          </h3>
        </Link>

        <RatingStars rating={product.rating} />

        <p className="text-base font-bold text-brand-700">
          {formatPrice(product.price)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-2 flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white transition-colors ${
            added
              ? "bg-green-600 hover:bg-green-700"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
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
      </div>
    </div>
  );
}