"use client";

import Link from "next/link";

export default function GutCampaignPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Campaign · Gut Health
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Is your gut holding you back?
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            Bloating, inconsistent digestion, skin flare-ups, or low energy can all be linked to the
            microbes living in your gut. The VAMS BIOME gut microbiome kit turns those signals into
            clear, AI-supported guidance.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/diagnostics"
              className="inline-flex rounded-full bg-cyan-500 px-5 py-2 text-white shadow-sm hover:bg-cyan-600"
            >
              Order Now – Ships Free
            </Link>
            <Link
              href="/ai/report"
              className="inline-flex rounded-full border border-cyan-200 px-5 py-2 text-cyan-700 hover:bg-cyan-50"
            >
              See Sample Report
            </Link>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Why VAMS BIOME gut testing wins</h2>
          <p className="mt-2 text-sm text-slate-700">
            Not all gut tests or probiotic plans are created equal. Here is how our approach compares
            to typical, one-size-fits-all options.
          </p>
          <div className="mt-4 overflow-x-auto text-xs text-slate-800">
            <table className="min-w-full border border-slate-200 text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2">Feature</th>
                  <th className="border-b border-slate-200 px-3 py-2">VAMS BIOME</th>
                  <th className="border-b border-slate-200 px-3 py-2">Typical gut test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-slate-100 px-3 py-2">AI-driven insights</td>
                  <td className="border-b border-slate-100 px-3 py-2">BiomeAI scores, pathways, and protocols</td>
                  <td className="border-b border-slate-100 px-3 py-2">Static PDF with raw taxa list</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-100 px-3 py-2">Multi-sample ecosystem</td>
                  <td className="border-b border-slate-100 px-3 py-2">Gut now, full-body panel later (gut + skin + vaginal + oral)</td>
                  <td className="border-b border-slate-100 px-3 py-2">Gut only</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-100 px-3 py-2">Women&apos;s health focus</td>
                  <td className="border-b border-slate-100 px-3 py-2">Dedicated GUT HER &amp; VAGI-HER pathways</td>
                  <td className="border-b border-slate-100 px-3 py-2">Generic reports</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-100 px-3 py-2">Therapeutic ecosystem</td>
                  <td className="border-b border-slate-100 px-3 py-2">Linked to BiomeMart probiotics &amp; protocols</td>
                  <td className="border-b border-slate-100 px-3 py-2">No clear follow-through</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Trust assets */}
        <section className="rounded-2xl bg-slate-900 p-6 text-slate-50">
          <h2 className="text-lg font-semibold">Built for trust and real-world care</h2>
          <ul className="mt-3 grid gap-2 text-xs md:grid-cols-2">
            <li>• ISO 13485-aligned partner labs and quality systems.</li>
            <li>• GMP manufacturing partners for future therapeutic products.</li>
            <li>• Internal accuracy and reproducibility targets &gt;95% on control samples.</li>
            <li>• Encrypted data flows and role-based access across the platform.</li>
          </ul>
          <p className="mt-4 text-[11px] text-slate-300">
            VAMS BIOME tests are for informational and wellness use and are not intended to diagnose,
            treat, cure, or prevent any disease. Always discuss results with your healthcare
            professional.
          </p>
        </section>
      </div>
    </main>
  );
}
