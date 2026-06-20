import { notFound } from "next/navigation";
import { Tag } from "lucide-react";
import { getProductById, products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils/formatPrice";
import RatingStars from "@/components/product/RatingStars";
import ProductImageCarousel from "@/components/product/ProductImageCarousel";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export const dynamicParams = false;

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductImageCarousel
          images={product.images}
          productTitle={product.title}
        />

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {product.title}
            </h1>
            <p className="mt-1 text-sm text-foreground/50">{product.brand}</p>
          </div>

          <RatingStars
            rating={product.rating}
            reviewCount={product.reviewCount}
            size="md"
          />

          <p className="text-3xl font-bold text-brand-700">
            {formatPrice(product.price)}
          </p>

          <p className="leading-relaxed text-foreground/70">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Tag className="size-4" aria-hidden="true" />
            <span>
              Category: <span className="font-medium">{categoryLabel}</span>
            </span>
          </div>

          <hr className="my-2 border-slate-200" />

          {/* Pass the full product object so the panel can call addItem */}
          <ProductPurchasePanel product={product} />
        </div>
      </div>
    </main>
  );
}