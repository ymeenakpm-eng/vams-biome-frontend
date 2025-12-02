"use client";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-base text-slate-700">
        <h1 className="mb-1 text-4xl font-bold text-slate-900">Refund Policy</h1>
        <p className="mb-4 text-sm text-slate-500">Last updated: 2 December 2025</p>
        <p className="mb-4 text-slate-600 text-justify">
          This page explains how refunds and replacements work for eligible VAMS BIOME orders.
          It is a general explanation and does not replace any formal legal terms agreed at
          checkout. These rules currently apply to orders shipped within India and Australia.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">1. Eligibility for refunds</h2>
        <p className="mb-3 text-justify">
          Refunds or replacements are considered in the following situations: (a) your kit or
          product arrives damaged or unusable, (b) the wrong item is shipped, or (c) an
          unused kit is returned in its original, unopened packaging. To be eligible, you
          must contact us within <span className="font-medium">7 days</span> of the recorded
          delivery date with your order ID and clear photos of the issue where applicable.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">2. Non-refundable items</h2>
        <p className="mb-3 text-justify">
          For safety and regulatory reasons, opened or partially used biological sample
          kits, used health products, and perishable probiotic items cannot be returned or
          resold. Once a kit has been used to collect a sample or a report has been
          generated, it is generally not eligible for a refund.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">3. Subscription cancellations</h2>
        <p className="mb-3 text-justify">
          Subscriptions (for example, recurring probiotic plans or ongoing insights access)
          can usually be cancelled at any time from your account dashboard. Unless
          otherwise stated in a specific offer, cancellations stop the next billing cycle
          and do not automatically generate refunds for previous billing periods.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">4. How refunds are processed</h2>
        <p className="mb-6 text-justify">
          To request a refund or replacement, please email our support team at
          <span className="font-medium"> support@vamsbiome.com</span> with your order
          number, photos of the issue (if applicable), and a short description of what
          went wrong. Approved refunds are generally issued back to the
          <span className="font-medium"> original payment method</span> within
          <span className="font-medium"> 10 working days</span>, depending on your bank
          or payment provider.
        </p>
      </div>
    </main>
  );
}
