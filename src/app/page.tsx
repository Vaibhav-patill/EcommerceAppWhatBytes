import { getProducts } from "@/lib/data/products";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center">
      <h1 className="text-2xl font-bold text-brand-700">Shophub</h1>
      <p className="text-foreground/70">
        Project scaffold ready &mdash; {products.length} products loaded from
        mock data.
      </p>
    </main>
  );
}