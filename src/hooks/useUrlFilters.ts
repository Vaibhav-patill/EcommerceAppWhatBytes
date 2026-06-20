"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import type { Category } from "@/lib/types";

export interface UrlFilterValues {
  q: string;
  category: Category | "all";
  minPrice: number;
  maxPrice: number;
  brand: string | "all";
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

/**
 * Reads filter state from the URL and exposes setters that push
 * updated query params without a full page reload. The URL remains
 * the single source of truth for filters, so links stay shareable
 * and the server component re-renders with the correct filtered list.
 */
export function useUrlFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const values: UrlFilterValues = useMemo(() => {
    const q = searchParams.get("q") ?? "";

    const categoryParam = searchParams.get("category");
    const category: Category | "all" =
      categoryParam === "electronics" ||
      categoryParam === "clothing" ||
      categoryParam === "home"
        ? categoryParam
        : "all";

    const priceParam = searchParams.get("price");
    let minPrice = DEFAULT_MIN_PRICE;
    let maxPrice = DEFAULT_MAX_PRICE;
    if (priceParam && priceParam.includes("-")) {
      const [minStr, maxStr] = priceParam.split("-");
      const parsedMin = Number(minStr);
      const parsedMax = Number(maxStr);
      if (!Number.isNaN(parsedMin) && !Number.isNaN(parsedMax)) {
        minPrice = parsedMin;
        maxPrice = parsedMax;
      }
    }

    const brand = searchParams.get("brand") ?? "all";

    return { q, category, minPrice, maxPrice, brand };
  }, [searchParams]);

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === "" || value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }

      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  const setSearch = useCallback(
    (q: string) => updateParams({ q: q || null }),
    [updateParams]
  );

  const setCategory = useCallback(
    (category: Category | "all") => updateParams({ category }),
    [updateParams]
  );

  const setPriceRange = useCallback(
    (min: number, max: number) => {
      const isDefaultRange =
        min === DEFAULT_MIN_PRICE && max === DEFAULT_MAX_PRICE;
      updateParams({ price: isDefaultRange ? null : `${min}-${max}` });
    },
    [updateParams]
  );

  const setBrand = useCallback(
    (brand: string) => updateParams({ brand: brand === "all" ? null : brand }),
    [updateParams]
  );

  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  return {
    values,
    setSearch,
    setCategory,
    setPriceRange,
    setBrand,
    clearFilters,
    defaultMinPrice: DEFAULT_MIN_PRICE,
    defaultMaxPrice: DEFAULT_MAX_PRICE,
  };
}