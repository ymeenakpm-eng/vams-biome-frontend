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
      <div className="mx-auto w-full px-3 md:px-8 lg:px-12">
        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="text-4xl font-semibold text-slate-900">Shopping Cart</h1>
          {items.length > 0 && (
            <button
              type="button"
              className="text-base font-normal text-sky-700 hover:underline"
            >
              Deselect all items
            </button>
          )}
        </div>

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
              <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <ul className="divide-y divide-slate-200 rounded-lg bg-white shadow-sm">
                    {items.map((item: any) => (
                      <li key={item.id} className="px-4 py-4">
                        <div className="grid gap-4 grid-cols-[auto,auto,minmax(0,1.6fr),minmax(0,0.6fr)] items-start">
                          {/* Checkbox */}
                          <div className="pt-8">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
                              defaultChecked
                            />
                          </div>

                          {/* Left: item image placeholder */}
                          <div className="relative h-24 w-32 overflow-hidden rounded-md bg-slate-100">
                            {/* In a real build, map variant metadata to an image; placeholder for now */}
                            <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
                              Kit image
                            </span>
                          </div>

                          {/* Middle: title and basic info */}
                          <div className="space-y-1 text-base">
                            <p className="text-lg font-semibold text-slate-900 line-clamp-2">
                              {item.title}
                            </p>
                            {item.description && (
                              <p className="text-sm text-slate-600 line-clamp-2">{item.description}</p>
                            )}
                            {!item.description && (
                              <p className="text-sm text-slate-600 line-clamp-2">
                                Biome test kit or product from your Medusa store. Full product copy can
                                be wired here later.
                              </p>
                            )}
                            <p className="text-sm font-medium text-emerald-700">In stock</p>
                            <p className="text-xs font-semibold text-sky-700">✓prime</p>
                          </div>

                          {/* Right: price column */}
                          <div className="flex flex-col items-end gap-1 text-right">
                            {item.total && (
                              <p className="text-lg font-semibold text-slate-900">
                                {formatCurrency(item.total)}
                              </p>
                            )}
                            {item.unit_price && (
                              <p className="text-xs text-slate-500">
                                {formatCurrency(item.unit_price)} each
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Bottom row: quantity controls + actions like Amazon */}
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-700">
                          <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            disabled={loading}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-[11px] font-semibold text-amber-700 hover:bg-amber-50"
                            title="Remove"
                          >
                            <FaTrashAlt className="h-3 w-3" />
                          </button>
                          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-white px-3 py-1">
                            <button
                              type="button"
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-amber-700 hover:bg-amber-50"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={loading || item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="min-w-[1.75rem] text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-amber-700 hover:bg-amber-50"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              disabled={loading}
                            >
                              +
                            </button>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-[11px] text-sky-700">
                            <button type="button" className="hover:underline">
                              Delete
                            </button>
                            <span className="text-slate-300">|</span>
                            <button type="button" className="hover:underline">
                              Save for later
                            </button>
                            <span className="text-slate-300">|</span>
                            <button type="button" className="hover:underline">
                              See more like this
                            </button>
                            <span className="text-slate-300">|</span>
                            <button type="button" className="hover:underline">
                              Share
                            </button>
                          </div>
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
                  <div className="rounded-lg bg-white px-4 py-5 shadow-sm">
                    <p className="text-lg text-slate-900">
                      Subtotal ({items.length} {items.length === 1 ? "item" : "items"}):
                      <span className="ml-1 text-2xl font-semibold text-emerald-700">
                        {cart?.total ? formatCurrency(cart.total) : ""}
                      </span>
                    </p>
                    <label className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      This order contains a gift
                    </label>
                    <Link
                      href="/checkout"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700"
                    >
                      Proceed to Buy
                    </Link>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white px-4 py-5 text-sm text-slate-800 shadow-sm">
                    <p className="text-lg font-semibold text-slate-900">
                      Customers also viewed
                    </p>
                    <div className="mt-3 flex gap-3">
                      <div className="relative h-16 w-20 overflow-hidden rounded-md bg-slate-100">
                        <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
                          Kit image
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="line-clamp-2 text-sm font-medium text-slate-900">
                          Another VAMS BIOME test kit or supplement can be showcased here.
                        </p>
                        <p className="mt-2 text-sm font-semibold text-emerald-700">₹1,999.00</p>
                        <button
                          type="button"
                          className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                        >
                          Add to cart (demo)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
