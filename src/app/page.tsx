"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              Unified microbiome ecosystem
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              Decode your microbiome. Design your next chapter.
            </h1>
            <p className="mt-4 text-sm text-slate-700 max-w-xl">
              VAMS BIOME connects diagnostics, AI insights, products, and care into one experience so
              people can move from lab results to real-world action.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/well"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
              >
                Start with BiomeWell
              </Link>
              <Link
                href="/ai/report"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
              >
                Preview BiomeAI report
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                5 microbiome test kits
              </h2>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li>• Gut microbiome test</li>
                <li>• Vaginal microbiome test</li>
                <li>• Skin microbiome test</li>
                <li>• Oral microbiome test</li>
                <li className="sm:col-span-2">• Full-body microbiome panel</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-sky-900 p-4 text-sky-50">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                Probiotic &amp; protocol highlights
              </h3>
              <ul className="mt-2 grid gap-1.5 text-xs text-sky-50/90 sm:grid-cols-3">
                <li>• Targeted gut reset formulations</li>
                <li>• Women&apos;s synbiotic stacks</li>
                <li>• Skin &amp; oral microbiome care</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-sky-100 px-4 py-3 text-xs font-semibold tracking-wide text-slate-600">
            <span className="text-slate-800">Trusted foundations:</span>
            <span>ISO-aligned labs</span>
            <span>GMP manufacturing partners</span>
            <span>HIPAA / GDPR-conscious data design</span>
          </div>
        </section>

 {/* How it works preview */}
<section className="mb-16 rounded-2xl bg-white p-6 shadow-sm">
  <h2 className="text-lg font-semibold text-slate-900">How it works</h2>

  <div className="mt-4 grid gap-4 text-sm text-slate-700 md:grid-cols-5">
    <div>
      <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700">
        Step 1
      </span>
      <p className="mt-2">Order your kit</p>
    </div>

    <div>
      <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700">
        Step 2
      </span>
      <p className="mt-2">Collect and ship your sample</p>
    </div>

    <div>
      <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700">
        Step 3
      </span>
      <p className="mt-2">Lab + AI processing</p>
    </div>

    <div>
      <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700">
        Step 4
      </span>
      <p className="mt-2">Get your interactive report</p>
    </div>

    <div>
      <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700">
        Step 5
      </span>
      <p className="mt-2">Start your personalized plan</p>
    </div>
  </div>

  {/* Different coloured CTA button */}
<Link
  href="/how-it-works"
  className="mt-6 inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
>
  Explore the full journey
</Link>
</section>

        {/* Trust + testimonials preview */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6 text-slate-50">
            <h2 className="text-lg font-semibold">Built with science and security</h2>
            <p className="mt-2 text-sm text-slate-200">
              Use this area to highlight ISO/GMP labs, data protection practices, and HIPAA/GDPR-aligned
              infrastructure.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">What people are saying</h2>
            <p className="mt-2 text-sm text-slate-700">
              Placeholder for testimonials from individuals, clinicians, and research partners.
            </p>
          </div>
        </section>

        {/* Blog + newsletter preview */}
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">From the BiomeInsights blog</h2>
            <p className="mt-2 text-sm text-slate-700">
              Surface 2–3 featured articles on gut, women&apos;s, skin, oral health, or AI in health.
            </p>
            <Link
              href="/blog"
              className="mt-3 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
            >
              View all articles
            </Link>
          </div>
          <div className="rounded-2xl bg-sky-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Stay in the loop</h2>
            <p className="mt-2 text-sm text-slate-700">
              Placeholder for newsletter signup capturing founders, clinicians, and early adopters.
            </p>
          </div>
        </section>

        {/* Products & Platforms */}
        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Products &amp; Platforms</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
            <div>
              <h3 className="font-semibold text-slate-900">BiomeWell</h3>
              <p className="text-slate-700 text-sm">
                Testing kits, sample registration, user dashboard.
              </p>
              <Link href="/well" className="text-cyan-700 text-sm font-semibold hover:text-cyan-800">
                Go to BiomeWell →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">BiomeAI</h3>
              <p className="text-slate-700 text-sm">
                AI-driven microbiome reports and PDF generation.
              </p>
              <Link
                href="/ai/report"
                className="text-cyan-700 text-sm font-semibold hover:text-cyan-800"
              >
                View reports →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">BiomeMart</h3>
              <p className="text-slate-700 text-sm">
                Marketplace for probiotics, synbiotics, and therapeutics.
              </p>
              <Link href="/mart" className="text-cyan-700 text-sm font-semibold hover:text-cyan-800">
                Explore BiomeMart →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">VAMSScape</h3>
              <p className="text-slate-700 text-sm">
                Personalized health portal combining diet and microbiome insights.
              </p>
              <Link
                href="/scape"
                className="text-cyan-700 text-sm font-semibold hover:text-cyan-800"
              >
                Open VAMSScape →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">VAMSConnect</h3>
              <p className="text-slate-700 text-sm">
                Telehealth platform for coaches and specialists.
              </p>
              <Link
                href="/connect"
                className="text-cyan-700 text-sm font-semibold hover:text-cyan-800"
              >
                Book a session →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Admin &amp; Partners</h3>
              <p className="text-slate-700 text-sm">
                CMS, partner dashboards, and analytics for labs, brands, and clinicians.
              </p>
              <Link
                href="/admin"
                className="text-cyan-700 text-sm font-semibold hover:text-cyan-800"
              >
                Open admin →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}