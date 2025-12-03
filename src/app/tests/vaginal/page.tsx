"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addLineItem, createCart, getCart, removeLineItem } from "@/lib/medusa-cart";
import { getStoredCartId, setStoredCartId } from "@/lib/cart-client";

const corePanels = [
  {
    code: "V1",
    name: "Core Ecology (CST Profile)",
    description: "Lactobacillus dominance, CST types, and overall vaginal community balance.",
  },
  {
    code: "V2",
    name: "Pathogen + Dysbiosis",
    description: "BV-associated taxa, opportunistic pathogens, and dysbiosis markers.",
  },
  {
    code: "V3",
    name: "Functional Ecology",
    description: "pH-modulating taxa, lactic acid potential, and barrier integrity.",
  },
];

const insightPacks = [
  {
    id: "fertility",
    name: "Fertility Pack",
    price: "₹1,999",
    description: "Vaginal microbiome patterns linked to implantation, miscarriage risk, and IVF outcomes.",
  },
  {
    id: "menopause",
    name: "Menopause Pack",
    price: "₹1,499",
    description: "Microbiome shifts across perimenopause and menopause, dryness, and discomfort.",
  },
  {
    id: "candida",
    name: "Candida / Mycobiome Pack",
    price: "₹999",
    description: "Fungal balance, Candida overgrowth signatures, and recurrent infection risk markers.",
  },
  {
    id: "sexual-health",
    name: "Sexual Health Pack",
    price: "₹999",
    description: "Patterns linked to recurrent BV, STIs, and post-coital discomfort.",
  },
];

const tiers = [
  {
    id: "basic",
    name: "Tier 1 — Basic (16S)",
    description: [
      "Bacterial profile and CST typing",
      "Alpha diversity",
      "Basic dysbiosis and BV risk score",
    ],
    priceRange: "₹5,999 – ₹6,999",
  },
  {
    id: "advanced",
    name: "Tier 2 — Advanced (WGS)",
    description: [
      "Bacteria, fungi, and viruses",
      "Functional pathway coverage",
      "Condition-aware risk scoring",
    ],
    priceRange: "₹11,999 – ₹14,999",
  },
  {
    id: "premium",
    name: "Tier 3 — Premium (MetaT)",
    description: [
      "Gene expression and inflammatory activity",
      "Hormone-responsive pathways",
      "Highest level of personalization",
    ],
    priceRange: "₹21,999 – ₹26,999",
  },
];

// Demo-only fake variant IDs for wiring the flow.
// Replace these with real Medusa variant IDs later.
const VAGINAL_BASE_VARIANT_ID = "vaginal-base-demo-variant";

const VAGINAL_PACK_VARIANT_IDS: Record<string, string> = {
  fertility: "vaginal-pack-fertility-demo",
  menopause: "vaginal-pack-menopause-demo",
  candida: "vaginal-pack-candida-demo",
  "sexual-health": "vaginal-pack-sexual-health-demo",
};

const VAGINAL_TIER_VARIANT_IDS: Record<string, string> = {
  basic: "vaginal-tier-basic-demo",
  advanced: "vaginal-tier-advanced-demo",
  premium: "vaginal-tier-premium-demo",
};

const VAGINAL_PACK_PRICES: Record<string, number> = {
  fertility: 1999,
  menopause: 1499,
  candida: 999,
  "sexual-health": 999,
};

const VAGINAL_TIER_BASE_PRICES: Record<string, number> = {
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

export default function VaginalTestPage() {
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
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

  useEffect(() => {
    const existing = getStoredCartId();
    if (existing) {
      setCartId(existing);
    }

    try {
      if (typeof window !== "undefined") {
        const storedTotal = window.localStorage.getItem("vamsbiome_vaginal_config_total");
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
      await addLineItem(cart.id as string, VAGINAL_BASE_VARIANT_ID, 1);
      return cart.id as string;
    } catch {
      return null;
    }
  };

  const recomputeAndStoreConfigTotal = (packs: string[], tier: string | null) => {
    const tierAmount = tier ? VAGINAL_TIER_BASE_PRICES[tier] ?? 0 : 0;
    const packsAmount = packs.reduce((sum, id) => sum + (VAGINAL_PACK_PRICES[id] ?? 0), 0);
    const total = tierAmount + packsAmount;

    setConfigTotal(total > 0 ? total : null);

    try {
      if (typeof window !== "undefined") {
        if (total > 0) {
          window.localStorage.setItem("vamsbiome_vaginal_config_total", String(total));
        } else {
          window.localStorage.removeItem("vamsbiome_vaginal_config_total");
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

    const variantId = VAGINAL_PACK_VARIANT_IDS[id];
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
      const tierVariantValues = Object.values(VAGINAL_TIER_VARIANT_IDS);
      const tierItems = (cart.items || []).filter((item: any) =>
        tierVariantValues.includes(item.variant_id as string)
      );

      for (const item of tierItems) {
        await removeLineItem(currentCartId, item.id);
      }

      if (nextTier) {
        const variantId = VAGINAL_TIER_VARIANT_IDS[nextTier];
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
          <span className="text-slate-800">Vaginal Microbiome Test (VagiX / VAGI-HER)</span>
        </div>

        <header className="mb-8 max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-emerald-600">
            VagiX — BiomeWell vaginal diagnostic
          </p>
          <h1 className="mt-2 text-6xl font-semibold text-slate-900">
            Your Vaginal Microbiome Test
          </h1>
          <p className="mt-3 text-2xl text-slate-600">
            Configure your VagiX / VAGI-HER test by reviewing the core panels, turning on optional
            insight packs, and choosing the sequencing tier that matches your stage of life and
            goals.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Left: hero image */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="relative h-[28rem] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/tests/vaginal-kit.png"
                alt="Vaginal Microbiome Test kit"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Right: hero copy */}
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm text-lg text-slate-700 leading-relaxed">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              VagiX / VAGI-HER Vaginal Microbiome Test
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">What you'll discover</h2>
            <p>
              VagiX helps you understand how your vaginal microbiome may be contributing to BV,
              recurrent infections, fertility challenges, and menopause-related symptoms.
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">You'll receive</h3>
            <p className="text-base text-slate-600">
              Scores and panels are tuned to your life stage so you and your clinician can see where
              you sit today and how you change across cycles or treatment.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
              <li>CST profile, dysbiosis and infection risk scores</li>
              <li>Fertility-, pregnancy-, and menopause-aware insights</li>
              <li>Signals you can discuss with your gynaecologist or care team</li>
              <li>Options to add focused Insight Packs like Fertility or Menopause</li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <h3 className="text-xl font-semibold text-slate-900">What's included</h3>
              <div className="mt-4 space-y-3 text-base">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700">
                    1
                  </div>
                  <p>VagiX sample kit with free two-way shipping and simple swab instructions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700">
                    2
                  </div>
                  <p>Detailed vaginal microbiome report with CST, dysbiosis, and risk scores.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700">
                    3
                  </div>
                  <p>Guidance you can use alongside your fertility, OB-GYN, or menopause care.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700">
                    4
                  </div>
                  <p>Options to add focused packs for fertility, menopause, candida, or sexual health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Left: configuration steps */}
          <div className="space-y-8">
            {/* Core panels */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Core panels included</h2>
              <p className="mt-2 text-base text-slate-600">
                Every VagiX kit includes CST profiling, pathogen/dysbiosis assessment, and functional
                ecology panels. These adapt to 16S, WGS, or MetaT depending on your tier.
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
                  The full VagiX panel family includes 8–12 domains such as CST type, lactic
                  acid–producing taxa, BV-associated complexes, mycobiome balance, pH influences,
                  fertility-associated taxa, and menopause transition markers.
                </p>
              </details>
            </section>

            {/* Insight packs */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Enhance your results with Insight Packs
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Optional packs focus on fertility, menopause, recurrent infections, and broader
                sexual health. These sit on top of your core panels.
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
                Higher tiers add fungal and viral coverage, functional context, and richer
                condition-aware insights. You can start with Basic and upgrade on future kits.
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

          {/* Right: sticky summary (static for now) */}
          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="min-h-[320px] rounded-2xl bg-white px-6 py-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-900">Your VagiX kit summary</h2>
              <dl className="mt-4 space-y-1.5 text-lg text-slate-700">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Test type</dt>
                  <dd className="font-semibold">VagiX / VAGI-HER Vaginal Microbiome Test</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Sample type</dt>
                  <dd className="font-semibold">Vaginal swab</dd>
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
                Calculated from your selected VagiX tier and Insight Packs (demo pricing).
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
