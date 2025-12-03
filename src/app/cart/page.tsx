"use client";

import { useEffect, useState } from "react";
import {
  getCart,
  updateLineItem,
  removeLineItem,
} from "@/lib/medusa-cart";
import { getStoredCartId } from "@/lib/cart-client";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

const formatCurrency = (amountInMinor?: number | null) => {
  if (!amountInMinor) return "";
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  return formatter.format(amountInMinor / 100);
};

export default function CartPage() {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = getStoredCartId();
    if (!id) {
      setLoading(false);
      setCartId(null);
      return;
    }

    setCartId(id);

    const loadCart = async () => {
      try {
        const c = await getCart(id);
        setCart(c);
      } catch (e) {
        setError("Failed to load cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  const handleQuantityChange = async (lineItemId: string, quantity: number) => {
    if (!cartId || quantity < 1) return;
    try {
      setLoading(true);
      const updated = await updateLineItem(cartId, lineItemId, quantity);
      setCart(updated);
    } catch (e) {
      setError("Could not update quantity.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (lineItemId: string) => {
    if (!cartId) return;
    try {
      setLoading(true);
      const updated = await removeLineItem(cartId, lineItemId);
      setCart(updated);
    } catch (e) {
      setError("Could not remove item.");
    } finally {
      setLoading(false);
    }
  };

  const items = cart?.items ?? [];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="mb-6 text-5xl font-semibold text-slate-900">Your cart</h1>

        {loading && <p className="text-lg text-slate-600">Loading your cart...</p>}

        {!loading && !cartId && (
          <>
            <p className="text-lg text-slate-600">You don&apos;t have a cart yet.</p>
            <p className="mt-3 text-base text-slate-500">
              Start by adding a product from the BiomeMart Products page.
            </p>
          </>
        )}

        {!loading && cartId && error && (
          <p className="text-lg text-red-600">{error}</p>
        )}

        {!loading && cartId && !error && (
          <>
            {items.length === 0 ? (
              <p className="text-lg text-slate-600">Your cart is currently empty.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <ul className="divide-y divide-slate-200 rounded-lg bg-white shadow-sm">
                    {items.map((item: any) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-4 px-4 py-3"
                      >
                        <div>
                          <p className="text-xl font-medium text-slate-900">
                            {item.title}
                          </p>
                          <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-emerald-500 bg-emerald-50 px-4 py-2 text-sm text-slate-700">
                            <button
                              type="button"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400 bg-white text-sm text-emerald-700"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={loading || item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="min-w-[2rem] text-center text-lg font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400 bg-white text-xs text-emerald-700"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              disabled={loading}
                            >
                              +
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemove(item.id)}
                              disabled={loading}
                              className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-emerald-700 hover:text-emerald-800"
                              title="Remove"
                            >
                              <FaTrashAlt className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {item.unit_price && (
                            <p className="text-lg font-semibold text-slate-900">
                              {formatCurrency(item.unit_price)}
                            </p>
                          )}
                          {item.total && (
                            <p className="text-lg font-semibold text-slate-900">
                              {formatCurrency(item.total)}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-sm text-slate-500">
                    This cart is powered by your local Medusa Store API. Checkout, shipping, and
                    payment flows can be connected later.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
                    <span className="text-base font-medium text-slate-900">
                      Cart total
                    </span>
                    {cart?.total && (
                      <span className="text-lg font-semibold text-emerald-700">
                        {formatCurrency(cart.total)}
                      </span>
                    )}
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                    <p className="text-xl font-semibold text-slate-900">
                      {cart?.total ? formatCurrency(cart.total) : ""}
                    </p>
                    <p className="mt-2 text-sm text-emerald-700 font-medium">
                      Eligible for fast delivery in select cities
                    </p>
                    <p className="mt-2 text-sm">
                      FREE delivery on subscription orders over a certain value. Final shipping and
                      taxes are calculated at checkout.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-emerald-800">
                      In stock
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
                      <span className="text-slate-500">Ships from</span>
                      <span className="font-medium text-slate-900">VAMS BIOME</span>
                      <span className="text-slate-500">Sold by</span>
                      <span className="font-medium text-slate-900">VAMS BIOME Marketplace</span>
                      <span className="text-slate-500">Payment</span>
                      <span className="font-medium text-emerald-700">Secure at checkout</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
