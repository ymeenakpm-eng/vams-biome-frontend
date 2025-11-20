const MEDUSA_URL =
  process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000";

const MEDUSA_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY;

export async function listStoreProducts() {
  const headers: Record<string, string> = {};

  if (MEDUSA_PUBLISHABLE_KEY) {
    headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;
  }

  const res = await fetch(`${MEDUSA_URL}/store/products`, {
    // Cache lightly in production; always fresh in dev
    next: { revalidate: 60 },
    headers,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Medusa products: ${res.status}`);
  }

  const data = await res.json();
  return data.products as any[];
}
