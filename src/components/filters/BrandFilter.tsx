"use client";

interface BrandFilterProps {
  brands: string[];
  value: string;
  onChange: (brand: string) => void;
}

export default function BrandFilter({
  brands,
  value,
  onChange,
}: BrandFilterProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-foreground">
        Brand
      </legend>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm text-foreground/80">
          <input
            type="radio"
            name="brand"
            value="all"
            checked={value === "all"}
            onChange={() => onChange("all")}
            className="size-4 accent-brand-600"
          />
          All
        </label>
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <input
              type="radio"
              name="brand"
              value={brand}
              checked={value === brand}
              onChange={() => onChange(brand)}
              className="size-4 accent-brand-600"
            />
            {brand}
          </label>
        ))}
      </div>
    </fieldset>
  );
}