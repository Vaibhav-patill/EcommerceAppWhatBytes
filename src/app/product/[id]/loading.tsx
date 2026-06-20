export default function ProductDetailLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image carousel skeleton */}
        <div className="flex flex-col gap-3">
          <div className="aspect-square w-full animate-pulse rounded-xl bg-slate-200" />
          <div className="flex gap-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="size-16 animate-pulse rounded-md bg-slate-200"
              />
            ))}
          </div>
        </div>

        {/* Detail panel skeleton */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-slate-100" />
          </div>

          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="size-4 animate-pulse rounded bg-slate-200"
              />
            ))}
            <div className="ml-2 h-4 w-12 animate-pulse rounded bg-slate-100" />
          </div>

          {/* Price */}
          <div className="h-9 w-28 animate-pulse rounded bg-slate-200" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
          </div>

          {/* Category chip */}
          <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />

          <hr className="border-slate-200" />

          {/* Qty + CTA */}
          <div className="flex gap-3">
            <div className="h-10 w-28 animate-pulse rounded-md bg-slate-200" />
            <div className="h-10 flex-1 animate-pulse rounded-md bg-slate-200 sm:flex-none sm:w-40" />
          </div>
        </div>
      </div>
    </main>
  );
}