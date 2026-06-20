"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useUrlFilters } from "@/hooks/useUrlFilters";

const DEBOUNCE_MS = 300;

export default function SearchBar() {
  const { values, setSearch } = useUrlFilters();

  // Local input state keeps typing instant; the URL (and therefore the
  // server-filtered product list) updates after a short debounce so we
  // aren't pushing a router navigation on every keystroke.
  const [inputValue, setInputValue] = useState(values.q);
  const [previousUrlValue, setPreviousUrlValue] = useState(values.q);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // If the URL's search term changes from outside this component
  // (e.g. "Clear all" in the sidebar, browser back/forward), resync
  // the visible input text to match.
  if (values.q !== previousUrlValue) {
    setPreviousUrlValue(values.q);
    setInputValue(values.q);
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.value;
    setInputValue(next);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setSearch(next);
    }, DEBOUNCE_MS);
  }

  function handleClear() {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    setInputValue("");
    setSearch("");
  }

  return (
    <label className="relative block">
      <span className="sr-only">Search for products</span>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        type="search"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for products..."
        className="w-full rounded-md border-0 bg-white py-2 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
      />
      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}