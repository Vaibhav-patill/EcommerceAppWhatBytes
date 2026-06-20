export default function CartLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Page heading skeleton */}
      <div className="mb-6 h-8 w-48 animate-pulse rounded-md bg-slate-200" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
        {/* Item list skeleton */}
        <div className="flex flex-col divide-y divide-slate-200 rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
              <div className="size-20 shrink-0 animate-pulse rounded-md bg-slate-200 sm:size-28" />
              <div className="flex flex-1 flex-col gap-3 py-1">
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-1/4 animate-pulse rounded bg-slate-100" />
                <div className="h-5 w-1/5 animate-pulse rounded bg-slate-200" />
                <div className="mt-auto h-9 w-28 animate-pulse rounded-md bg-slate-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Summary skeleton */}
        <div className="h-72 animate-pulse rounded-lg bg-slate-100" />
      </div>
    </main>
  );
}