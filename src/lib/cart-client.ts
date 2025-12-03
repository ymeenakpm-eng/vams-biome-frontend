const CART_KEY = "vamsbiome_cart_id";

export function getStoredCartId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(CART_KEY);
  } catch {
    return null;
  }
}

export function setStoredCartId(id: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_KEY, id);
  } catch {
    // ignore storage errors
  }
}
