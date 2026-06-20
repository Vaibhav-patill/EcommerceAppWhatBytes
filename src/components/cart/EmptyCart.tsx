import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <div className="flex size-20 items-center justify-center rounded-full bg-slate-100">
        <ShoppingCart className="size-9 text-slate-400" aria-hidden="true" />
      </div>

      <h1 className="text-xl font-bold text-foreground">Your cart is empty</h1>

      <p className="max-w-sm text-sm text-foreground/60">
        Looks like you haven&apos;t added anything yet. Browse the store and
        find something you&apos;ll love.
      </p>

      <Link
        href="/"
        className="mt-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Browse Products
      </Link>
    </main>
  );
}