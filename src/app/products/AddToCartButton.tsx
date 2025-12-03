"use client";

import { useState } from "react";
import { addLineItem, createCart } from "@/lib/medusa-cart";
import { getStoredCartId, setStoredCartId } from "@/lib/cart-client";

interface AddToCartButtonProps {
  variantId: string;
}

export function AddToCartButton({ variantId }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      let cartId = getStoredCartId();
      if (!cartId) {
        const cart = await createCart();
        cartId = cart.id as string;
        setStoredCartId(cartId);
      }

      await addLineItem(cartId!, variantId, 1);
      // TODO: hook up a toast/notification system later
    } catch (err) {
      console.error("Failed to add item to cart", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Adding..." : "Add to cart"}
    </button>
  );
}
