import { notFound } from "next/navigation";
import { listStoreProducts } from "@/lib/medusa";
import { AddToCartButton } from "../AddToCartButton";

const MEDUSA_URL =
  process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000";

const MEDUSA_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY;

async function getProduct(id: string) {
  const headers: Record<string, string> = {};
  if (MEDUSA_PUBLISHABLE_KEY) {
    headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;
  }

  const res = await fetch(`${MEDUSA_URL}/store/products/${id}`, {
    headers,
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to load product: ${res.status}`);
  }

  const data = await res.json();
  return (data as any).product;
}

export async function generateStaticParams() {
  // Best-effort: use the first page of Medusa products for static generation
  let products: any[] = [];
  try {
    products = await listStoreProducts();
  } catch {
    products = [];
  }
  return products.map((p) => ({ id: p.id }));
}

const formatCurrency = (amountInMinor?: number | null) => {
  if (!amountInMinor) return "";
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  return formatter.format(amountInMinor / 100);
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const primaryVariant = product.variants?.[0];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="mb-4 text-sm text-slate-500">
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{product.title}</span>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section>
            <h1 className="text-3xl font-semibold text-slate-900">
              {product.title}
            </h1>
            {product.description && (
              <p className="mt-3 text-base text-slate-700 whitespace-pre-line">
                {product.description}
              </p>
            )}
          </section>

          <aside className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            {primaryVariant?.prices?.[0]?.amount && (
              <p className="text-2xl font-semibold text-slate-900">
                {formatCurrency(primaryVariant.prices[0].amount)}
              </p>
            )}
            {primaryVariant && (
              <AddToCartButton variantId={primaryVariant.id} />
            )}
            <p className="text-xs text-slate-500">
              Prices and availability are powered by your local Medusa store. Payment and
              subscriptions can be connected later.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
