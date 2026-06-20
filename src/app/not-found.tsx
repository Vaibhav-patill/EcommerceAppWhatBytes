import Link from "next/link";
import { PackageSearch } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-24 text-center sm:px-6">
      <PackageSearch className="size-12 text-slate-300" aria-hidden="true" />
      <h1 className="text-xl font-bold text-foreground">Page not found</h1>
      <p className="text-sm text-foreground/50">
        We couldn&apos;t find the page or product you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        Back to Product Listing
      </Link>
    </main>
  );
}