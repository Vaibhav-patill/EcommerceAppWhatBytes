import type { Category, Product } from "@/lib/types";

export interface ParsedFilters {
  q?: string;
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
}

const VALID_CATEGORIES: Category[] = ["electronics", "clothing", "home"];

/**
 * Parses raw URL search params (strings) into typed filter values.
 * Invalid or missing values are simply omitted, never thrown.
 */
export function parseFilters(
  searchParams: Record<string, string | string[] | undefined>
): ParsedFilters {
  const filters: ParsedFilters = {};

  const q = searchParams.q;
  if (typeof q === "string" && q.trim().length > 0) {
    filters.q = q.trim();
  }

  const category = searchParams.category;
  if (
    typeof category === "string" &&
    VALID_CATEGORIES.includes(category as Category)
  ) {
    filters.category = category as Category;
  }

  const price = searchParams.price;
  if (typeof price === "string" && price.includes("-")) {
    const [minStr, maxStr] = price.split("-");
    const min = Number(minStr);
    const max = Number(maxStr);
    if (!Number.isNaN(min) && !Number.isNaN(max) && min <= max) {
      filters.minPrice = min;
      filters.maxPrice = max;
    }
  }

  const brand = searchParams.brand;
  if (typeof brand === "string" && brand.trim().length > 0) {
    filters.brand = brand.trim();
  }

  return filters;
}

/**
 * Applies search, category, price, and brand filters to a product list.
 * Pure function — no side effects, fully unit-testable.
 */
export function filterProducts(
  products: Product[],
  filters: ParsedFilters
): Product[] {
  return products.filter((product) => {
    if (filters.q) {
      const query = filters.q.toLowerCase();
      const matchesTitle = product.title.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesBrand = product.brand.toLowerCase().includes(query);
      if (!matchesTitle && !matchesCategory && !matchesBrand) {
        return false;
      }
    }

    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (
      typeof filters.minPrice === "number" &&
      typeof filters.maxPrice === "number" &&
      (product.price < filters.minPrice || product.price > filters.maxPrice)
    ) {
      return false;
    }

    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }

    return true;
  });
}