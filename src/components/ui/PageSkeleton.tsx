import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";

export default function PageSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar skeleton */}
        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <div className="h-6 w-20 animate-pulse rounded bg-slate-200" />
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 animate-pulse rounded bg-slate-100"
                style={{ width: `${60 + i * 10}%` }}
              />
            ))}
          </div>
          <div className="mt-4 h-6 w-16 animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-full animate-pulse rounded-full bg-slate-100" />
        </div>

        {/* Grid skeleton */}
        <div>
          <div className="mb-4 h-7 w-40 animate-pulse rounded bg-slate-200" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}