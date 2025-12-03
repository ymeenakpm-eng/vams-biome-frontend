"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addLineItem, createCart, getCart, removeLineItem } from "@/lib/medusa-cart";
import { getStoredCartId, setStoredCartId } from "@/lib/cart-client";

const corePanels = [
  {
    code: "S1",
    name: "Core Ecology",
    description: "Overall skin community composition, dominance patterns, and diversity.",
  },
  {
    code: "S2",
    name: "Pathogen + Dysbiosis",
    description: "Acne-associated taxa, fungal overgrowth, and dysbiosis markers.",
  },
  {
    code: "S3",
    name: "Functional Ecology",
    description: "Barrier integrity, sebum interaction, and inflammation-linked signatures.",
  },
];

const heroImages = [
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
];

const insightPacks = [
  {
    id: "acne",
    name: "Acne Pack",
    price: "₹1,499",
    description: "Acne-prone microbe patterns, inflammation risk, and barrier stress.",
  },
  {
    id: "barrier",
    name: "Barrier Function Pack",
    price: "₹999",
    description: "Barrier integrity, dryness and sensitivity-linked taxa, and repair potential.",
  },
  {
    id: "fungal",
    name: "Fungal Balance Pack",
    price: "₹999",
    description: "Malassezia balance, fungal overgrowth risk, and mixed dermatoses patterns.",
  },
];

const tiers = [
  {
    id: "basic",
    name: "Tier 1 — Basic (16S)",
    description: [
      "Bacterial profile",
      "Alpha diversity",
      "Basic dysbiosis and acne risk score",
    ],
    priceRange: "₹5,499 – ₹6,499",
  },
  {
    id: "advanced",
    name: "Tier 2 — Advanced (WGS)",
    description: [
      "Bacteria and fungi",
      "Functional pathway coverage",
      "Condition-aware risk markers",
    ],
    priceRange: "₹10,999 – ₹13,499",
  },
  {
    id: "premium",
    name: "Tier 3 — Premium (MetaT)",
    description: [
      "Gene expression in key skin niches",
      "Inflammation and immune activity",
      "Highest level of personalization",
    ],
    priceRange: "₹19,999 – ₹24,999",
  },
];

// Demo-only fake variant IDs for wiring the flow.
// Replace these with real Medusa variant IDs later.
const SKIN_BASE_VARIANT_ID = "skin-base-demo-variant";

const SKIN_PACK_VARIANT_IDS: Record<string, string> = {
  acne: "skin-pack-acne-demo",
  barrier: "skin-pack-barrier-demo",
  fungal: "skin-pack-fungal-demo",
};

const SKIN_TIER_VARIANT_IDS: Record<string, string> = {
  basic: "skin-tier-basic-demo",
  advanced: "skin-tier-advanced-demo",
  premium: "skin-tier-premium-demo",
};

const SKIN_PACK_PRICES: Record<string, number> = {
  acne: 1499,
  barrier: 999,
  fungal: 999,
};

const SKIN_TIER_BASE_PRICES: Record<string, number> = {
  basic: 5499,
  advanced: 10999,
  premium: 19999,
};

const formatINR = (amountInRupees: number) => {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amountInRupees);
  } catch {
    return `₹${amountInRupees.toFixed(0)}`;
  }
};

export default function SkinTestPage() {
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [cartId, setCartId] = useState<string | null>(null);
  const [configTotal, setConfigTotal] = useState<number | null>(null);
  const [allKitsTotal, setAllKitsTotal] = useState<number | null>(null);
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);

  const recomputeAllKitsTotalFromStorage = () => {
    try {
      if (typeof window === "undefined") return;

      const gut = Number(window.localStorage.getItem("vamsbiome_gut_config_total") || "NaN");
      const vaginal = Number(
        window.localStorage.getItem("vamsbiome_vaginal_config_total") || "NaN"
      );
      const oral = Number(window.localStorage.getItem("vamsbiome_oral_config_total") || "NaN");
      const skin = Number(window.localStorage.getItem("vamsbiome_skin_config_total") || "NaN");

      const sum =
        (Number.isNaN(gut) ? 0 : gut) +
        (Number.isNaN(vaginal) ? 0 : vaginal) +
        (Number.isNaN(oral) ? 0 : oral) +
        (Number.isNaN(skin) ? 0 : skin);

      setAllKitsTotal(sum > 0 ? sum : null);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    const existing = getStoredCartId();
    if (existing) {
      setCartId(existing);
    }

    try {
      if (typeof window !== "undefined") {
        const storedTotal = window.localStorage.getItem("vamsbiome_skin_config_total");
        if (storedTotal) {
          const parsed = Number(storedTotal);
          if (!Number.isNaN(parsed)) {
            setConfigTotal(parsed);
          }
        }
      }
    } catch {
      // ignore storage errors
    }

    recomputeAllKitsTotalFromStorage();
  }, []);

  const ensureCart = async () => {
    if (cartId) return cartId;

    const stored = getStoredCartId();
    if (stored) {
      setCartId(stored);
      return stored;
    }

    try {
      const cart = await createCart();
      setStoredCartId(cart.id as string);
      setCartId(cart.id as string);
      await addLineItem(cart.id as string, SKIN_BASE_VARIANT_ID, 1);
      return cart.id as string;
    } catch {
      return null;
    }
  };

  const recomputeAndStoreConfigTotal = (packs: string[], tier: string | null) => {
    const tierAmount = tier ? SKIN_TIER_BASE_PRICES[tier] ?? 0 : 0;
    const packsAmount = packs.reduce((sum, id) => sum + (SKIN_PACK_PRICES[id] ?? 0), 0);
    const total = tierAmount + packsAmount;

    setConfigTotal(total > 0 ? total : null);

    try {
      if (typeof window !== "undefined") {
        if (total > 0) {
          window.localStorage.setItem("vamsbiome_skin_config_total", String(total));
        } else {
          window.localStorage.removeItem("vamsbiome_skin_config_total");
        }
      }
    } catch {
      // ignore storage errors
    }

    recomputeAllKitsTotalFromStorage();
  };

  const togglePack = async (id: string) => {
    setSelectedPacks((current) => {
      const next = current.includes(id)
        ? current.filter((p) => p !== id)
        : [...current, id];
      recomputeAndStoreConfigTotal(next, selectedTier);
      return next;
    });

    const variantId = SKIN_PACK_VARIANT_IDS[id];
    if (!variantId) return;

    const currentCartId = await ensureCart();
    if (!currentCartId) return;

    try {
      const cart = await getCart(currentCartId);
      const existing = cart.items?.find((item: any) => item.variant_id === variantId);

      if (existing) {
        await removeLineItem(currentCartId, existing.id);
      } else {
        await addLineItem(currentCartId, variantId, 1);
      }
    } catch {
      // ignore Medusa errors in demo mode
    }
  };

  const handleTierClick = async (tierId: string, isCurrentlySelected: boolean) => {
    const nextTier = isCurrentlySelected ? null : tierId;
    setSelectedTier(nextTier);
    recomputeAndStoreConfigTotal(selectedPacks, nextTier);

    const currentCartId = await ensureCart();
    if (!currentCartId) return;

    try {
      const cart = await getCart(currentCartId);
      const tierVariantValues = Object.values(SKIN_TIER_VARIANT_IDS);
      const tierItems = (cart.items || []).filter((item: any) =>
        tierVariantValues.includes(item.variant_id as string)
      );

      for (const item of tierItems) {
        await removeLineItem(currentCartId, item.id);
      }

      if (nextTier) {
        const variantId = SKIN_TIER_VARIANT_IDS[nextTier];
        if (variantId) {
          await addLineItem(currentCartId, variantId, 1);
        }
      }
    } catch {
      // ignore Medusa errors in demo mode
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <div className="mb-6 text-sm text-slate-500">
          <Link href="/tests" className="hover:text-emerald-700">
            Tests
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Skin Microbiome Test (SkinX)</span>
        </div>

        <header className="mb-8 max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-emerald-600">
            SkinX — BiomeWell skin diagnostic
          </p>
          <h1 className="mt-2 text-6xl font-semibold text-slate-900">
            Your Skin Microbiome Test
          </h1>
          <p className="mt-3 text-2xl text-slate-600">
            Configure your SkinX test to understand acne, barrier function, sensitivity, and fungal
            balance across key skin zones.
          </p>
        </header>

        {/* Hero split: large kit image + key copy */}
        <section className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl bg-white px-6 pt-6 pb-1 shadow-sm">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={heroImages[activeHeroImageIndex]}
                alt="Skin Microbiome Test kit"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="mt-2 flex gap-4">
              {heroImages.map((src, index) => {
                const isActive = index === activeHeroImageIndex;
                return (
                  <button
                    key={src + index}
                    type="button"
                    onClick={() => setActiveHeroImageIndex(index)}
                    className={`relative h-20 w-28 overflow-hidden rounded-xl bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isActive ? "ring-2 ring-emerald-500" : "ring-0"
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Skin Microbiome Test thumbnail"
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm text-base text-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900">What you'll discover</h2>
            <p>
              SkinX helps you understand how your skin microbiome may be contributing to acne,
              barrier disruption, sensitivity, and fungal imbalances across key skin zones.
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">You'll receive</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>Core ecology, pathogen/dysbiosis, and functional ecology skin panels</li>
              <li>Condition-aware scores for acne, barrier function, and sensitivity</li>
              <li>Signals you can use with your dermatologist or care team</li>
              <li>Options to add focused Insight Packs like Acne or Barrier Function</li>
            </ul>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Left: configuration steps */}
          <div className="space-y-8">
            {/* Core panels */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Core panels included</h2>
              <p className="mt-2 text-base text-slate-600">
                Every SkinX kit includes ecology, pathogen/dysbiosis, and functional ecology panels
                targeted to acne, barrier, and fungal balance.
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {corePanels.map((panel) => (
                  <div
                    key={panel.code}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-base"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                      {panel.code}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{panel.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{panel.description}</p>
                  </div>
                ))}
              </div>

              <details className="mt-4 text-base text-slate-600">
                <summary className="cursor-pointer font-semibold text-emerald-700">
                  View full panel list
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Panels cover barrier integrity, sebum and lipid interactions, acne- and rosacea-
                  associated taxa, fungal balance, and research-linked immune and inflammation
                  markers.
                </p>
              </details>
            </section>

            {/* Insight packs */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Enhance your results with Insight Packs
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Optional packs zoom in on acne, barrier function, and fungal balance so you and your
                care team can personalise topical and systemic plans.
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {insightPacks.map((pack) => {
                  const isSelected = selectedPacks.includes(pack.id);
                  return (
                    <article
                      key={pack.id}
                      className={`flex flex-col justify-between rounded-xl border p-4 text-base transition ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{pack.name}</h3>
                        <p className="mt-1 text-sm text-slate-600">{pack.description}</p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-base font-semibold text-emerald-700">{pack.price}</span>
                        <button
                          type="button"
                          onClick={() => togglePack(pack.id)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            isSelected
                              ? "border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
                              : "border border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                          }`}
                        >
                          {isSelected ? "Remove pack" : "Add pack"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Sequencing tiers */}
            <section className="pt-2">
              <h2 className="text-3xl font-semibold text-slate-900">
                Choose your sequencing tier
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Move from basic bacterial profiling to advanced functional and MetaT insights as you
                need more depth.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {tiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <article
                      key={tier.id}
                      className={`flex flex-col justify-between rounded-2xl border p-5 text-base transition ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{tier.name}</p>
                        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
                          {tier.description.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-base font-semibold text-emerald-700">
                          {tier.priceRange}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedTier(isSelected ? null : tier.id)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            isSelected
                              ? "border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
                              : "border border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                          }`}
                        >
                          {isSelected ? "Remove tier" : "Select tier"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right: sticky summary (static for now) */}
          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="min-h-[320px] rounded-2xl bg-white px-6 py-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-900">Your SkinX kit summary</h2>
              <dl className="mt-4 space-y-1.5 text-lg text-slate-700">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Test type</dt>
                  <dd className="font-semibold">SkinX Skin Microbiome Test</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Sample type</dt>
                  <dd className="font-semibold">Skin swab</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Selected tier</dt>
                  <dd className="font-semibold">
                    {selectedTier
                      ? tiers.find((t) => t.id === selectedTier)?.name ?? "Custom tier"
                      : "None yet"}
                  </dd>
                </div>
              </dl>

              {selectedPacks.length > 0 && (
                <div className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-base text-emerald-900">
                  <p className="font-semibold">
                    Selected insight packs ({selectedPacks.length}):
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    {insightPacks
                      .filter((p) => selectedPacks.includes(p.id))
                      .map((p) => (
                        <li key={p.id}>{p.name}</li>
                      ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-lg">
                <span className="font-semibold text-slate-900">Estimated total</span>
                <span className="text-2xl font-semibold text-emerald-700">
                  {configTotal && configTotal > 0
                    ? formatINR(configTotal)
                    : "₹10,999 – ₹13,499"}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Calculated from your selected SkinX tier and Insight Packs (demo pricing).
              </p>
              {allKitsTotal && allKitsTotal > 0 && (
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  All configured kits total so far: {formatINR(allKitsTotal)}
                </p>
              )}

              <Link
                href="/checkout"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Proceed to checkout
              </Link>

              <p className="mt-3 text-xs text-slate-500">
                This summary is illustrative. In future, this panel will be wired to your Medusa
                products and cart so prices, tiers, and packs update live.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
