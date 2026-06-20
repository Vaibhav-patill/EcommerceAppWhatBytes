import { Suspense } from "react";
import { getAllBrands, getProducts } from "@/lib/data/products";
import { filterProducts, parseFilters } from "@/lib/utils/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";
import Sidebar from "@/components/filters/Sidebar";
import PageSkeleton from "@/components/ui/PageSkeleton";

interface HomePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams;
  const filters = parseFilters(resolvedSearchParams);

  const [allProducts, brands] = await Promise.all([
    getProducts(),
    Promise.resolve(getAllBrands()),
  ]);

  const filteredProducts = filterProducts(allProducts, filters);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <Suspense fallback={<div className="h-96 rounded-lg bg-slate-100" />}>
          <Sidebar brands={brands} />
        </Suspense>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-brand-900">
              Product Listing
            </h1>
            <span className="text-sm text-foreground/50">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          <Suspense fallback={<PageSkeleton />}>
            <ProductGrid products={filteredProducts} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}