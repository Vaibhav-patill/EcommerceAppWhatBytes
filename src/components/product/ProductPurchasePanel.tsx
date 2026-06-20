"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { getProductById } from "@/lib/data/products";
import QuantitySelector from "@/components/product/QuantitySelector";
import AddToCartButton from "@/components/product/AddToCartButton";
import type { Product } from "@/lib/types";

interface ProductPurchasePanelProps {
  product: Product;
}

export default function ProductPurchasePanel({
  product,
}: ProductPurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    addItem(product, quantity);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <AddToCartButton onAddToCart={handleAddToCart} className="w-full sm:w-auto" />
    </div>
  );
}