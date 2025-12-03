"use client";

import { useEffect, useState } from "react";
import { getCart, updateCartDetails } from "@/lib/medusa-cart";
import { getStoredCartId } from "@/lib/cart-client";

const formatCurrency = (amountInMinor?: number | null) => {
  if (!amountInMinor) return "";
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  return formatter.format(amountInMinor / 100);
};

export default function CheckoutPage() {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [configTotals, setConfigTotals] = useState<{
    gut?: number;
    vaginal?: number;
    oral?: number;
    skin?: number;
  }>({});

  useEffect(() => {
    const id = getStoredCartId();
    if (!id) {
      setLoading(false);
      setCartId(null);
    } else {
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
    }

    // Read any stored configuration totals from localStorage (demo only)
    try {
      if (typeof window !== "undefined") {
        const gut = Number(window.localStorage.getItem("vamsbiome_gut_config_total") || "NaN");
        const vaginal = Number(
          window.localStorage.getItem("vamsbiome_vaginal_config_total") || "NaN"
        );
        const oral = Number(window.localStorage.getItem("vamsbiome_oral_config_total") || "NaN");
        const skin = Number(window.localStorage.getItem("vamsbiome_skin_config_total") || "NaN");

        setConfigTotals({
          gut: Number.isNaN(gut) ? undefined : gut,
          vaginal: Number.isNaN(vaginal) ? undefined : vaginal,
          oral: Number.isNaN(oral) ? undefined : oral,
          skin: Number.isNaN(skin) ? undefined : skin,
        });
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cartId) return;

    const formData = new FormData(event.currentTarget);
    const fullName = (formData.get("full_name") as string) || "";
    const email = (formData.get("email") as string) || undefined;
    const phone = (formData.get("phone") as string) || undefined;
    const cityPin = (formData.get("city_pin") as string) || "";
    const address = (formData.get("address") as string) || "";

    const [first_name, ...restName] = fullName.split(" ");
    const last_name = restName.join(" ") || undefined;

    setSubmitting(true);
    try {
      const updated = await updateCartDetails(cartId, {
        email,
        shipping_address: {
          first_name,
          last_name,
          address_1: address,
          city: cityPin,
          phone,
        },
      });
      setCart(updated);
      setSubmitted(true);
    } catch (e) {
      setError("Could not save your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const items = cart?.items ?? [];

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h1 className="mb-6 text-4xl font-semibold text-slate-900">Order received</h1>
          <p className="text-lg text-slate-700">
            Thank you. Your details have been captured and your draft order has been recorded in the
            system. A member of the VAMS BIOME team will contact you to confirm payment and
            delivery.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            This is a demo checkout flow. Online payment and live shipping quotes can be wired up to
            this step later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="mb-6 text-4xl font-semibold text-slate-900">Checkout</h1>

        {loading && <p className="text-lg text-slate-600">Loading your cart...</p>}

        {!loading && !cartId && (
          <p className="text-lg text-slate-600">
            No active cart found. Please add a product to your cart before checking out.
          </p>
        )}

        {!loading && cartId && error && (
          <p className="text-lg text-red-600">{error}</p>
        )}

        {!loading && cartId && !error && items.length > 0 && (
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Left: contact + address form */}
            <section className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Contact &amp; delivery details
              </h2>
              <p className="text-sm text-slate-600">
                This information helps us confirm your order, coordinate delivery, and link your
                purchase to your diagnostics and AI insights.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Full name
                    </label>
                    <input
                      name="full_name"
                      type="text"
                      required
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Mobile number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      City &amp; PIN code
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Full address
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={3}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Notes for our team (optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Preferred delivery window, clinician details, special instructions..."
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Saving details..." : "Confirm details & place order"}
                </button>
              </form>
            </section>

            {/* Right: order summary */}
            <aside className="space-y-4">
              <section className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold text-slate-900">Order summary</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {items.map((item: any) => (
                    <li key={item.id} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">
                          Qty {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        {item.total && (
                          <p className="text-sm font-semibold text-slate-900">
                            {formatCurrency(item.total)}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
                  <span className="font-medium text-slate-900">Cart total</span>
                  {cart?.total && (
                    <span className="text-base font-semibold text-emerald-700">
                      {formatCurrency(cart.total)}
                    </span>
                  )}
                </div>

                {(configTotals.gut || configTotals.vaginal || configTotals.oral || configTotals.skin) && (
                  <div className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
                    <p className="font-semibold">Config totals from test kits (demo)</p>
                    <ul className="mt-1 space-y-0.5 pl-4">
                      {configTotals.gut && (
                        <li>
                          GutX: <span className="font-semibold">₹{configTotals.gut.toFixed(0)}</span>
                        </li>
                      )}
                      {configTotals.vaginal && (
                        <li>
                          VagiX: <span className="font-semibold">₹{configTotals.vaginal.toFixed(0)}</span>
                        </li>
                      )}
                      {configTotals.oral && (
                        <li>
                          OralX: <span className="font-semibold">₹{configTotals.oral.toFixed(0)}</span>
                        </li>
                      )}
                      {configTotals.skin && (
                        <li>
                          SkinX: <span className="font-semibold">₹{configTotals.skin.toFixed(0)}</span>
                        </li>
                      )}
                    </ul>
                    <div className="mt-1 flex items-center justify-between text-[11px] font-semibold">
                      <span>All configured kits total</span>
                      <span>
                        ₹
                        {(
                          (configTotals.gut || 0) +
                          (configTotals.vaginal || 0) +
                          (configTotals.oral || 0) +
                          (configTotals.skin || 0)
                        ).toFixed(0)}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-emerald-900/80">
                      These are calculated from your selected tiers and Insight Packs on the test kit
                      pages and are not yet linked to the Medusa cart total.
                    </p>
                  </div>
                )}
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-5 text-xs text-slate-700 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Secure, clinician-aligned ordering
                </p>
                <p className="mt-2 text-xs">
                  For now, a member of the VAMS BIOME team will confirm your order, payment, and
                  delivery by phone or email. Online payments and subscription billing will be added
                  later.
                </p>
              </section>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
