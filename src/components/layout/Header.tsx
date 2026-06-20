import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

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
          <label className="relative block">
            <span className="sr-only">Search for products</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full rounded-md border-0 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
            />
          </label>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-md bg-brand-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-900/80"
          >
            <ShoppingCart className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Cart</span>
            <span
              className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-brand-700"
              aria-label="0 items in cart"
            >
              0
            </span>
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