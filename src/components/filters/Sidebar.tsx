"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import CategoryFilter from "@/components/filters/CategoryFilter";
import PriceRangeFilter from "@/components/filters/PriceRangeFilter";
import BrandFilter from "@/components/filters/BrandFilter";
import { useUrlFilters } from "@/hooks/useUrlFilters";

interface SidebarProps {
  brands: string[];
}

export default function Sidebar({ brands }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  

  const {
    values,
    setCategory,
    setPriceRange,
    setBrand,
    clearFilters,
    defaultMinPrice,
    defaultMaxPrice,
  } = useUrlFilters();

  const hasActiveFilters =
    values.q ||
    values.category !== "all" ||
    values.brand !== "all" ||
    values.minPrice > 0 ||
    values.maxPrice < 1000;

  const filterPanel = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-brand-700 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <CategoryFilter value={values.category} onChange={setCategory} />

          <PriceRangeFilter
            min={values.minPrice}
            max={values.maxPrice}
            defaultMin={defaultMinPrice}
            defaultMax={defaultMaxPrice}
            onChange={setPriceRange}
          />
      <BrandFilter
            brands={brands}
            value={values.brand}
            onChange={setBrand}
          />
    </div>
  );

  return (
    <>
      {/* Mobile toggle button — visible below lg breakpoint */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-slate-50"
        >
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          Filters
          {hasActiveFilters && (
            <span className="flex size-5 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
              !
            </span>
          )}
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="absolute inset-y-0 left-0 flex w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <span className="text-sm font-semibold text-foreground">
                Filters
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close filters"
                className="text-slate-500 hover:text-foreground"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6">{filterPanel}</div>

            <div className="border-t border-slate-200 px-5 py-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-md bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Show results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar — visible at lg+ */}
      <aside className="hidden lg:block">
        <div className="sticky top-6 rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
          {filterPanel}
        </div>
      </aside>
    </>
  );
}







          





