const MEDUSA_URL =
  process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000";

const MEDUSA_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY;

async function medusaFetch(path: string, options?: RequestInit) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string> | undefined),
  };

  if (MEDUSA_PUBLISHABLE_KEY) {
    headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;
  }

  const res = await fetch(`${MEDUSA_URL}${path}`, {
    ...options,
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Medusa error ${res.status} on ${path}`);
  }

  return res.json();
}

export async function createCart() {
  const data = await medusaFetch("/store/carts", { method: "POST" });
  return (data as any).cart;
}

export interface ShippingAddressPayload {
  first_name?: string;
  last_name?: string;
  address_1: string;
  city?: string;
  postal_code?: string;
  phone?: string;
}

export async function updateCartDetails(
  cartId: string,
  payload: {
    email?: string;
    shipping_address?: ShippingAddressPayload;
  }
) {
  const body = JSON.stringify(payload);

  const data = await medusaFetch(`/store/carts/${cartId}`, {
    method: "POST",
    body,
  });

  return (data as any).cart;
}

export async function getCart(cartId: string) {
  const data = await medusaFetch(`/store/carts/${cartId}`, { method: "GET" });
  return (data as any).cart;
}

export async function addLineItem(
  cartId: string,
  variantId: string,
  quantity: number
) {
  const body = JSON.stringify({
    variant_id: variantId,
    quantity,
  });

  const data = await medusaFetch(`/store/carts/${cartId}/line-items`, {
    method: "POST",
    body,
  });

  return (data as any).cart;
}

export async function updateLineItem(
  cartId: string,
  lineItemId: string,
  quantity: number
) {
  const body = JSON.stringify({
    quantity,
  });

  const data = await medusaFetch(
    `/store/carts/${cartId}/line-items/${lineItemId}`,
    {
      method: "POST",
      body,
    }
  );

  return (data as any).cart;
}

export async function removeLineItem(cartId: string, lineItemId: string) {
  const data = await medusaFetch(
    `/store/carts/${cartId}/line-items/${lineItemId}`,
    {
      method: "DELETE",
    }
  );

  return (data as any).cart;
}
