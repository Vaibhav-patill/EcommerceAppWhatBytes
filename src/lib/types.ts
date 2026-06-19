export type Category = "electronics" | "clothing" | "home";

export interface Product{
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  brand: string;
  rating: number;
  reviewCount: number;
  images: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface ProductFilters {
  q?: string;
  category?: Category | "all";
  price?: string;
  brand?: string;
}