"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils/formatPrice";

interface CartSummaryProps {
  cartProducts: { product: Product; quantity: number }[];
}

const FREE_SHIPPING_THRESHOLD = 100;
const FLAT_SHIPPING = 9.99;

export default function CartSummary({ cartProducts }: CartSummaryProps) {
  const subtotal = cartProducts.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
  const total = subtotal + shipping;

  return (
    <div className="h-fit rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-base font-semibold text-foreground">
          Order Summary
        </h2>
      </div>

      <div className="space-y-3 px-6 py-5">
        <div className="flex justify-between text-sm text-foreground/70">
          <span>
            Subtotal (
            {cartProducts.reduce((sum, { quantity }) => sum + quantity, 0)}{" "}
            items)
          </span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-sm text-foreground/70">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span>{formatPrice(shipping)}</span>
          )}
        </div>

        {shipping > 0 && (
          <p className="text-xs text-foreground/50">
            Add{" "}
            <span className="font-medium text-brand-700">
              {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}
            </span>{" "}
            more for free shipping.
          </p>
        )}

        <div className="border-t border-slate-200 pt-3">
          <div className="flex justify-between text-base font-bold text-foreground">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <button
          type="button"
          className="w-full rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Proceed to Checkout
        </button>

        <Link
          href="/"
          className="mt-3 block text-center text-sm text-brand-700 transition-colors hover:text-brand-900 hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}