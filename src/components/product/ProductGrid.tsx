import { Suspense } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";
import EmptyState from "@/components/ui/EmptyState";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <Suspense fallback={<div className="h-64 rounded-lg bg-slate-100" />}>
        <EmptyState />
      </Suspense>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}