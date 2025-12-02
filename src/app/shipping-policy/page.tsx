"use client";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-base text-slate-700">
        <h1 className="mb-1 text-4xl font-bold text-slate-900">Shipping Policy</h1>
        <p className="mb-4 text-sm text-slate-500">Last updated: 2 December 2025</p>
        <p className="mb-4 text-slate-600 text-justify">
          This page explains how VAMS BIOME ships microbiome test kits and marketplace
          products, typical delivery timelines, and how we handle delays or lost
          shipments.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">1. Shipping regions & carriers</h2>
        <p className="mb-3 text-justify">
          We currently ship to select locations in India and Australia, with expansion
          to additional regions over time. Orders are fulfilled through trusted
          third-party logistics partners and standard courier services.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">2. Processing & delivery timelines</h2>
        <p className="mb-3 text-justify">
          Most orders are processed within 2–3 business days. Delivery windows vary by
          region but typically range from 3–10 business days after dispatch. You will
          receive an email or SMS with tracking details once your order has shipped.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">3. Shipping fees</h2>
        <p className="mb-3 text-justify">
          Shipping fees, if applicable, are shown at checkout before you confirm your
          order. From time to time we may offer promotional free shipping or bundled
          rates for specific products, regions, or order sizes.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">4. Delayed, lost, or damaged shipments</h2>
        <p className="mb-6 text-justify">
          If your order is significantly delayed, appears lost in transit, or arrives
          damaged, please contact us at
          <span className="font-medium"> support@vamsbiome.com</span> with your order
          ID and tracking number. We will work with our logistics partners to
          investigate the issue and, where appropriate, arrange a replacement shipment
          or refund in line with our <span className="font-medium">Refund Policy</span>
          (see the <span className="font-medium">Refund Policy</span> link in the
          site footer for full details of eligibility and timelines).
        </p>
      </div>
    </main>
  );
}
