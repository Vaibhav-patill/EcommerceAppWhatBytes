import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "@/components/ui/SearchBar";
import CartBadge from "@/components/cart/CartBadge";

export default function Header() {
  return (
    <header className="bg-brand-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-white sm:text-2xl"
        >
          Shophub
        </Link>

        <div className="order-3 w-full sm:order-none sm:flex-1">
          <Suspense
            fallback={
              <div className="h-9 w-full rounded-md bg-white/60" />
            }
          >
            <SearchBar />
          </Suspense>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-md bg-brand-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-900/80"
          >
            <ShoppingCart className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Cart</span>
            <CartBadge />
          </Link>

          <Link
            href="/profile"
            aria-label="Profile"
            className="flex size-9 items-center justify-center rounded-full bg-brand-900 text-white transition-colors hover:bg-brand-900/80"
          >
            <User className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}