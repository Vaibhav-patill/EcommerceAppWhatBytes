"use client";

import type { Category } from "@/lib/types";

interface CategoryOption {
  label: string;
  value: Category | "all";
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Clothing", value: "clothing" },
  { label: "Home", value: "home" },
];

interface CategoryFilterProps {
  value: Category | "all";
  onChange: (category: Category | "all") => void;
}

export default function CategoryFilter({
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-foreground">
        Category
      </legend>
      <div className="space-y-2">
        {CATEGORY_OPTIONS.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <input
              type="radio"
              name="category"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="size-4 accent-brand-600"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}