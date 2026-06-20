"use client";

import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { useUrlFilters } from "@/hooks/useUrlFilters";

export default function EmptyState() {
  const { clearFilters, values } = useUrlFilters();

  const hasActiveFilters =
    values.q ||
    values.category !== "all" ||
    values.brand !== "all" ||
    values.minPrice > 0 ||
    values.maxPrice < 1000;

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-slate-100">
        <PackageSearch
          className="size-8 text-slate-400"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-base font-semibold text-foreground">
          No products found
        </h2>
        <p className="text-sm text-foreground/60">
          {hasActiveFilters
            ? "Try adjusting or clearing your filters to see more results."
            : "No products are available right now. Check back soon."}
        </p>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-1 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Clear all filters
        </button>
      )}

      {!hasActiveFilters && (
        <Link
          href="/"
          className="mt-1 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Back to Shop
        </Link>
      )}
    </div>
  );
}