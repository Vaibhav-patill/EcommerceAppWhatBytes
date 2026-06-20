"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CartBadge() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span
      className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-brand-700"
      aria-label={`${mounted ? totalItems : 0} items in cart`}
    >
      {mounted ? (totalItems > 99 ? "99+" : totalItems) : 0}
    </span>
  );
}