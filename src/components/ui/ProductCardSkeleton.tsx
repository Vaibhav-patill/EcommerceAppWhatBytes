export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
      {/* Image */}
      <div className="aspect-square w-full animate-pulse bg-slate-200" />

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title */}
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />

        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="size-3.5 animate-pulse rounded bg-slate-200"
            />
          ))}
        </div>

        {/* Price */}
        <div className="h-5 w-1/3 animate-pulse rounded bg-slate-200" />

        {/* Button */}
        <div className="mt-2 h-9 w-full animate-pulse rounded-md bg-slate-100" />
      </div>
    </div>
  );
}