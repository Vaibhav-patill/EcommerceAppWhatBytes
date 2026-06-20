"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { products } from "@/lib/data/products";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Resolve full product objects for every cart item
  const cartProducts = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, quantity: item.quantity };
    })
    .filter(
      (entry): entry is { product: (typeof products)[0]; quantity: number } =>
        entry !== null
    );

  // Show a neutral skeleton while the store rehydrates from localStorage
  if (!mounted) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 h-8 w-48 animate-pulse rounded-md bg-slate-200" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          <div className="h-64 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-64 animate-pulse rounded-lg bg-slate-100" />
        </div>
      </main>
    );
  }

  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          Your Cart{" "}
          <span className="text-base font-normal text-foreground/50">
            ({cartProducts.length}{" "}
            {cartProducts.length === 1 ? "item" : "items"})
          </span>
        </h1>

        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-red-500 transition-colors hover:text-red-700 hover:underline"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col divide-y divide-slate-200 rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
          {cartProducts.map(({ product, quantity }) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        <CartSummary cartProducts={cartProducts} />
      </div>
    </main>
  );
}