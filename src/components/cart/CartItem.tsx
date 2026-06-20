"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useCartStore } from "@/store/cartStore";
import QuantitySelector from "@/components/product/QuantitySelector";

interface CartItemProps {
  product: Product;
  quantity: number;
}

export default function CartItem({ product, quantity }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex gap-4 p-4 sm:gap-6 sm:p-6">
      {/* Thumbnail */}
      <Link
        href={`/product/${product.id}`}
        className="relative size-20 shrink-0 overflow-hidden rounded-md bg-slate-100 sm:size-28"
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="112px"
          className="object-cover"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/product/${product.id}`}
            className="text-sm font-semibold text-foreground hover:underline"
          >
            {product.title}
          </Link>

          <button
            type="button"
            onClick={() => removeItem(product.id)}
            aria-label={`Remove ${product.title} from cart`}
            className="shrink-0 text-slate-400 transition-colors hover:text-red-500"
          >
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>

        <p className="text-xs text-foreground/50 capitalize">{product.brand}</p>

        <p className="text-base font-bold text-brand-700">
          {formatPrice(product.price)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <QuantitySelector
            quantity={quantity}
            onChange={(qty) => updateQuantity(product.id, qty)}
          />

          <p className="text-sm font-semibold text-foreground">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}