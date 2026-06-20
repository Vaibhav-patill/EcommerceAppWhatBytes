"use client";

import { PackageSearch } from "lucide-react";
import { useUrlFilters } from "@/hooks/useUrlFilters";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = "No products found",
  message,
}: EmptyStateProps) {
  const { values, clearFilters, defaultMinPrice, defaultMaxPrice } =
    useUrlFilters();

  const hasActiveFilters =
    Boolean(values.q) ||
    values.category !== "all" ||
    values.brand !== "all" ||
    values.minPrice !== defaultMinPrice ||
    values.maxPrice !== defaultMaxPrice;

  const defaultMessage = values.q
    ? `No results for "${values.q}". Try a different search term or adjust your filters.`
    : "Try adjusting your filters or search term.";

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white py-16 text-center">
      <PackageSearch className="size-10 text-slate-300" aria-hidden="true" />
      <p className="text-base font-semibold text-foreground">{title}</p>
      <p className="max-w-sm px-4 text-sm text-foreground/50">
        {message ?? defaultMessage}
      </p>
      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-1 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}