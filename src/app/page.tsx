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
              Know your microbiome. Unlock your health.
            </h1>
            <p className="mt-4 text-sm text-slate-700 max-w-xl">
              Decode what is happening across your gut, vaginal, skin, and oral microbiomes—then use
              AI-guided reports and microbiome-safe products to turn insights into action.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/well"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
              >
                Explore kits
              </Link>
              <Link
                href="/ai/report"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
              >
                View report demo
              </Link>
              <Link
                href="/campaign/gut"
                className="text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                Is your gut holding you back?
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
            <span>ISO / CAP-aligned partner labs</span>
            <span>GMP production &amp; cold-chain logistics</span>
            <span>HIPAA / GDPR-conscious data flows</span>
            <span>Secure Stripe payments &amp; audited cloud infra</span>
          </div>
        </section>

        {/* Value propositions */}
        <section className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Precision diagnostics</h2>
            <p className="mt-2 text-xs text-slate-700">
              Clinical-grade microbiome test kits for gut, vaginal, skin, and oral ecosystems. Science-validated and
              designed for easy at-home collection.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">AI-powered insights</h2>
            <p className="mt-2 text-xs text-slate-700">
              Our AI engine connects sequencing data, lifestyle inputs, and health markers to deliver personalized diet,
              supplement, and lifestyle protocols.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Therapeutic marketplace</h2>
            <p className="mt-2 text-xs text-slate-700">
              Shop microbiome-friendly probiotics, synbiotics, women&apos;s health solutions, and functional foods—curated
              for efficacy and safety.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Science, community, support</h2>
            <p className="mt-2 text-xs text-slate-700">
              Learn from research, join our wellness community, and stay supported throughout your microbiome journey
              with clinicians and coaches.
            </p>
          </div>
        </section>

        {/* Diagnostic test kit highlights */}
        <section className="mb-16 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Diagnostic test kits</h2>
          <p className="mt-2 text-sm text-slate-700">
            Start with the microbiome panel that matches your current priorities, then layer in AI insights and
            protocols as you go.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900">Gut microbiome test</h3>
              <p className="mt-1 text-xs">
                Understand digestion, inflammation, SCFA potential, dysbiosis markers, and gut–brain interactions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Vaginal microbiome test</h3>
              <p className="mt-1 text-xs">
                Analyze Lactobacillus dominance, dysbiosis, BV risk, pH balance, and reproductive health indicators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Skin microbiome test</h3>
              <p className="mt-1 text-xs">
                Assess microbiome balance related to acne, eczema, rosacea, and barrier health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Oral microbiome test</h3>
              <p className="mt-1 text-xs">
                Track oral pathogens, gum health risks, and the gut–oral axis contributing to systemic health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Full-body microbiome panel</h3>
              <p className="mt-1 text-xs">
                Combine gut, vaginal, skin, and oral insights in one integrated panel for a whole-body view.
              </p>
            </div>
          </div>
          <Link
            href="/diagnostics"
            className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Shop diagnostic kits
          </Link>
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

          <Link
            href="/how-it-works"
            className="mt-6 inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
          >
            Explore the full journey
          </Link>
        </section>

        {/* BiomeAI preview */}
        <section className="mb-16 rounded-2xl bg-slate-900 p-6 text-slate-50">
          <h2 className="text-lg font-semibold">Your microbiome, interpreted by AI.</h2>
          <p className="mt-2 text-sm text-slate-200 max-w-2xl">
            BiomeAI transforms raw sequencing data into scores, pathways, and personalized protocols—so you know
            exactly what to do next.
          </p>
          <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
            <ul className="space-y-1 text-slate-100/90 text-xs">
              <li>• Gut Health Index</li>
              <li>• Microbial diversity and keystone species</li>
              <li>• SCFA and metabolic pathway predictions</li>
            </ul>
            <ul className="space-y-1 text-slate-100/90 text-xs">
              <li>• Red flag markers for dysbiosis and pathobionts</li>
              <li>• Symptom-aligned pattern detection</li>
              <li>• Trends over repeat testing</li>
            </ul>
            <ul className="space-y-1 text-slate-100/90 text-xs">
          <div className="rounded-2xl bg-slate-900 p-6 text-slate-50">
            <h2 className="text-lg font-semibold">Built with science and security</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-200">
              <li>• Partner labs following ISO and CAP-aligned quality systems</li>
              <li>• HIPAA / GDPR-conscious data flows and role-based access controls</li>
              <li>• Encryption in transit and at rest for reports and identifiers</li>
              <li>• Secure Stripe payments and audited infrastructure on Vercel</li>
            </ul>
          </div>
        </section>

        {/* Blog + newsletter preview */}
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">From the BiomeInsights blog</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">
                  Gut"vaginal axis: why women&apos;s wellness starts in the microbiome
                </p>
                <p className="text-xs text-slate-600">
                  Explore how gut and vaginal ecosystems talk to each other and what that means for cycles,
                  fertility, and mood.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Can your microbiome predict your skin health?</p>
                <p className="text-xs text-slate-600">
                  Early research on the gut"skin axis, barrier function, and how microbial patterns map to flares.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">AI + microbiome: where precision wellness is heading</p>
                <p className="text-xs text-slate-600">
                  A practical look at how AI can turn complex omics data into day-to-day decisions.
                </p>
              </div>
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
            >
              Read the blog "&gt;
            </Link>
          </div>
          <div className="rounded-2xl bg-sky-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Sign up to unlock your personalized wellness journey.
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Join the VAMS BIOME list for a Free Gut Guide, launch updates, and subscriber-only
              offers on diagnostics, probiotics, and new AI report features.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
              >
                Join now
              </button>
            </form>
            <p className="mt-2 text-[11px] text-slate-500">
              No spamjust occasional, research-backed emails on diagnostics, AI features, and
              microbiome-safe products.
            </p>
          </div>
        </section>

        {/* BiomeMart featured products */}
        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">BiomeMart highlights</h2>
          <p className="mt-2 text-sm text-slate-700">
            Microbiome-safe formulations curated for gut, vaginal, skin, oral, and aquaculture ecosystems.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">Gut Restore Probiotic</h3>
              <p className="mt-1 text-xs text-slate-700">
                Multi-strain probiotic designed to support adult gut diversity, SCFA production, and barrier health.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-900">Coming soon</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">FloraFemme Synbiotic</h3>
              <p className="mt-1 text-xs text-slate-700">
                Urogenital-focused synbiotic stack for Lactobacillus support and pH balance.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-900">Coming soon</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">AquaGuard"</h3>
              <p className="mt-1 text-xs text-slate-700">
                Tri-stage aquaculture probiotic concept for water quality, feed efficiency, and stock resilience.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-900">For pilot partners</p>
            </div>
          </div>
          <Link
            href="/products"
            className="mt-6 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
          >
            Shop all products "&gt;
          </Link>
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