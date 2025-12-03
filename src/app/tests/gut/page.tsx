"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addLineItem, createCart, getCart, removeLineItem } from "@/lib/medusa-cart";
import { getStoredCartId, setStoredCartId } from "@/lib/cart-client";

const corePanels = [
  {
    code: "G1",
    name: "Core Ecology",
    description: "Overall community structure, diversity, and balance.",
  },
  {
    code: "G2",
    name: "Pathogen + Dysbiosis",
    description: "Pathobionts, overgrowth patterns, and dysbiosis markers.",
  },
  {
    code: "G3",
    name: "Functional Ecology",
    description: "SCFA potential, barrier integrity, and metabolic pathways.",
  },
];

const insightPacks = [
  {
    id: "gut-brain",
    name: "Gut–Brain Pack",
    price: "₹1,499",
    description: "SCFA, serotonin, GABA-related pathways to support mood and cognition.",
  },
  {
    id: "metabolic",
    name: "Metabolic Pack",
    price: "₹1,499",
    description: "TMAO, LPS, and obesity-linked signatures for metabolic health.",
  },
  {
    id: "longevity",
    name: "Longevity Pack",
    price: "₹1,499",
    description: "Aging microbiome indices and S40 longevity score.",
  },
  {
    id: "inflammation",
    name: "Inflammation Pack",
    price: "₹999",
    description: "LPS, barrier stress, and pathobiont-associated inflammation markers.",
  },
  {
    id: "hormone-gut",
    name: "Hormone–Gut Pack",
    price: "₹1,499",
    description: "Estrogen recycling (S22), androgen-linked signatures (S23), and hormone balance.",
  },
];

const tiers = [
  {
    id: "basic",
    name: "Tier 1 — Basic (16S)",
    description: [
      "Bacterial profile",
      "Alpha diversity",
      "Basic dysbiosis score",
    ],
    priceRange: "₹5,999 – ₹6,999",
  },
  {
    id: "advanced",
    name: "Tier 2 — Advanced (WGS)",
    description: [
      "Bacteria, fungi, and viruses",
      "Functional pathway coverage",
      "AI-powered risk scoring",
    ],
    priceRange: "₹11,999 – ₹14,999",
  },
  {
    id: "premium",
    name: "Tier 3 — Premium (MetaT)",
    description: [
      "Gene expression (MetaTranscriptomics)",
      "Inflammation activity",
      "Highest level of personalization",
    ],
    priceRange: "₹21,999 – ₹26,999",
  },
];

const heroImages = [
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
  "/test/test-kit.png",
];

// Demo-only fake variant IDs for wiring the flow.
// Replace these with real Medusa variant IDs later.
const GUT_BASE_VARIANT_ID = "gut-base-demo-variant";

const PACK_VARIANT_IDS: Record<string, string> = {
  "gut-brain": "gut-pack-gut-brain-demo",
  metabolic: "gut-pack-metabolic-demo",
  longevity: "gut-pack-longevity-demo",
  inflammation: "gut-pack-inflammation-demo",
  "hormone-gut": "gut-pack-hormone-demo",
};

const TIER_VARIANT_IDS: Record<string, string> = {
  basic: "gut-tier-basic-demo",
  advanced: "gut-tier-advanced-demo",
  premium: "gut-tier-premium-demo",
};

const PACK_PRICES: Record<string, number> = {
  "gut-brain": 1499,
  metabolic: 1499,
  longevity: 1499,
  inflammation: 999,
  "hormone-gut": 1499,
};

const TIER_BASE_PRICES: Record<string, number> = {
  basic: 5999,
  advanced: 11999,
  premium: 21999,
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

export default function GutTestPage() {
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);
  const [cartId, setCartId] = useState<string | null>(null);
  const [configTotal, setConfigTotal] = useState<number | null>(null);
  const [allKitsTotal, setAllKitsTotal] = useState<number | null>(null);

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

  // Load any existing cart ID and saved configuration total on mount
  useEffect(() => {
    const existing = getStoredCartId();
    if (existing) {
      setCartId(existing);
    }

    try {
      if (typeof window !== "undefined") {
        const storedTotal = window.localStorage.getItem("vamsbiome_gut_config_total");
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
      // Add base GutX kit once when creating the cart (demo behaviour)
      await addLineItem(cart.id as string, GUT_BASE_VARIANT_ID, 1);
      return cart.id as string;
    } catch {
      // Silently fail in demo mode
      return null;
    }
  };

  const recomputeAndStoreConfigTotal = (packs: string[], tier: string | null) => {
    const tierAmount = tier ? TIER_BASE_PRICES[tier] ?? 0 : 0;
    const packsAmount = packs.reduce((sum, id) => sum + (PACK_PRICES[id] ?? 0), 0);
    const total = tierAmount + packsAmount;

    setConfigTotal(total > 0 ? total : null);

    try {
      if (typeof window !== "undefined") {
        if (total > 0) {
          window.localStorage.setItem("vamsbiome_gut_config_total", String(total));
        } else {
          window.localStorage.removeItem("vamsbiome_gut_config_total");
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

    const variantId = PACK_VARIANT_IDS[id];
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
      // Ignore Medusa errors in demo mode
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
      // Remove any existing tier line items (only one tier at a time)
      const tierVariantValues = Object.values(TIER_VARIANT_IDS);
      const tierItems = (cart.items || []).filter((item: any) =>
        tierVariantValues.includes(item.variant_id as string)
      );

      for (const item of tierItems) {
        await removeLineItem(currentCartId, item.id);
      }

      if (nextTier) {
        const variantId = TIER_VARIANT_IDS[nextTier];
        if (variantId) {
          await addLineItem(currentCartId, variantId, 1);
        }
      }
    } catch {
      // Ignore Medusa errors in demo mode
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
          <span className="text-slate-800">Gut Microbiome Test (GutX)</span>
        </div>

        <header className="mb-8 max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-emerald-600">
            GutX — BiomeWell gut diagnostic
          </p>
          <h1 className="mt-2 text-6xl font-semibold text-slate-900">
            Your Gut Microbiome Test
          </h1>
          <p className="mt-3 text-2xl text-slate-600">
            Select your core panels, turn on optional insight packs, and choose the sequencing tier
            that matches your goals. Pricing updates as you customise your kit.
          </p>
        </header>

        {/* Hero split: large kit image + key copy */}
        <section className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl bg-white px-6 pt-6 pb-1 shadow-sm">
            <div className="relative h-[36rem] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={heroImages[activeHeroImageIndex]}
                alt="Gut Microbiome Test kit"
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Thumbnail strip (placeholder images for now) */}
            <div className="mt-2 flex gap-4">
              {heroImages.map((src, index) => {
                const isActive = index === activeHeroImageIndex;
                return (
                  <button
                    key={src + index}
                    type="button"
                    onClick={() => setActiveHeroImageIndex(index)}
                    className={`relative h-28 w-40 overflow-hidden rounded-xl bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isActive ? "ring-2 ring-emerald-500" : "ring-0"
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Gut Microbiome Test thumbnail"
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm text-lg text-slate-700 leading-relaxed">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              GutX Gut Microbiome Test
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">What you'll discover</h2>
            <p className="text-lg">
              GutX helps you understand how your gut microbiome may be influencing digestion, weight,
              skin, mood, and metabolism, using a single at-home stool sample.
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">You'll receive</h3>
            <p className="text-base text-slate-600">
              All results are presented as clear scores and ranges, so you and your clinician can see
              where you sit today and how you change over time.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
              <li>Core ecology, pathogen/dysbiosis, and functional ecology panels</li>
              <li>Condition-aligned scores across digestion, metabolism, skin, and mood axes</li>
              <li>AI-assisted recommendations you can discuss with your clinician</li>
              <li>Option to add focused Insight Packs like Gut–Brain or Metabolic</li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <h3 className="text-xl font-semibold text-slate-900">What's included</h3>
              <div className="mt-4 space-y-3 text-base">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700 flex items-center justify-center">
                    1
                  </div>
                  <p>GutX test kit with free two-way shipping and easy home collection.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700 flex items-center justify-center">
                    2
                  </div>
                  <p>Detailed microbiome report with condition-aware scores and trends.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700 flex items-center justify-center">
                    3
                  </div>
                  <p>Nutrition and lifestyle guidance aligned to your gut signatures.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700 flex items-center justify-center">
                    4
                  </div>
                  <p>Supplement and next-step recommendations to discuss with your clinician.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Left: configuration steps */}
          <div className="space-y-8">
            {/* Core panels */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Core panels included</h2>
              <p className="mt-2 text-base text-slate-600">
                Every GutX kit includes our core ecology, pathogen/dysbiosis, and functional ecology
                panels. These are powered by 16S, WGS, or MetaT depending on your chosen tier.
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
                  The full GutX panel set covers 8–12 domains including SCFA potential, barrier
                  integrity, bile acid modulation, gas production, pathogen overgrowth, beneficial vs
                  pathobiont balance, and research-aligned condition markers.
                </p>
              </details>
            </section>

            {/* Insight packs */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Enhance your results with Insight Packs
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Turn on deeper AI analysis focused on specific health axes. Packs are add-ons that sit
                on top of your core panels.
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
                Higher tiers unlock deeper functional and condition-aware insights. You can start with
                Basic and upgrade in future test cycles.
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
                          onClick={() => handleTierClick(tier.id, isSelected)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
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

          {/* Right: sticky summary + compact per-pack column */}
          <aside className="lg:sticky lg:top-24">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <section className="min-h-[320px] rounded-2xl bg-white px-6 py-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-900">Your GutX kit summary</h2>
              <dl className="mt-4 space-y-1.5 text-lg text-slate-700">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Test type</dt>
                  <dd className="font-semibold">GutX – Gut Microbiome Test</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Sample type</dt>
                  <dd className="font-semibold">Stool</dd>
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
                    : "₹11,999 – ₹14,999"}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Calculated from your selected GutX tier and Insight Packs (demo pricing).
              </p>

              <Link
                href="/checkout"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 text-xl font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Proceed to checkout
              </Link>

              <p className="mt-3 text-xs text-slate-500">
                This summary is illustrative. In future, this panel will be fully wired to your
                Medusa products and cart so prices and packs update live.
              </p>
            </section>

            <section className="rounded-2xl bg-white px-4 py-4 text-xs text-slate-800 shadow-sm">
              <div className="border-b border-slate-200 pb-3 mb-3">
                <p className="text-[11px] text-slate-500">Subtotal for this kit</p>
                <p className="mt-1 text-lg font-semibold text-emerald-700">
                  {configTotal && configTotal > 0 ? formatINR(configTotal) : "Select a tier or pack"}
                </p>
                <Link
                  href="/checkout"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-emerald-600 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Go to cart
                </Link>
              </div>

              <div className="mb-3 border-b border-slate-200 pb-3">
                <div className="flex gap-3">
                  <div className="relative h-14 w-20 overflow-hidden rounded-md bg-slate-100">
                    <Image
                      src={heroImages[0]}
                      alt="GutX kit"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-900">GutX – Gut Microbiome Test</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      {configTotal && configTotal > 0 ? formatINR(configTotal) : "Tier + packs pending"}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-amber-400 text-[11px] font-semibold text-amber-700 hover:bg-amber-50"
                  >
                    Del
                  </button>
                  <span className="inline-flex h-7 min-w-[2.25rem] items-center justify-center rounded-full border border-amber-400 text-[11px] font-semibold text-amber-700">
                    1
                  </span>
                  <button
                    type="button"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-amber-400 text-[11px] font-semibold text-amber-700 hover:bg-amber-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {selectedPacks.length === 0 ? (
                <p className="text-[11px] text-slate-500">
                  Turn on Insight Packs on the left to see them listed here.
                </p>
              ) : (
                <div className="space-y-3">
                  {insightPacks
                    .filter((pack) => selectedPacks.includes(pack.id))
                    .map((pack) => (
                      <div key={pack.id} className="border-b border-slate-200 pb-3 last:border-b-0">
                        <p className="text-sm font-semibold text-slate-900">{pack.name}</p>
                        <p className="mt-1 text-sm font-semibold text-emerald-700">{pack.price}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => togglePack(pack.id)}
                            className="rounded-full border border-amber-400 px-3 py-1 text-[11px] font-semibold text-amber-700 hover:bg-amber-50"
                          >
                            Remove
                          </button>
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-amber-400 font-semibold text-amber-700">
                              1
                            </span>
                            <button
                              type="button"
                              disabled
                              className="inline-flex h-7 items-center justify-center rounded-full border border-amber-300 px-3 font-semibold text-amber-500 opacity-60"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
