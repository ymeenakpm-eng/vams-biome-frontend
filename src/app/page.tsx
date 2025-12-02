"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-16">

      {/* Hero (full-width) */}
      <section className="relative mb-10 overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          {/* Galaxy background image */}
          <Image
            src="/images/hero-galaxy11.jpg"
            alt="Galaxy universe background"
            fill
            className="object-cover object-[center_top]"
            priority
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-900/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-0 pt-8 pb-4 md:px-2">
          <div className="mb-6 -ml-4 flex items-baseline gap-4 text-cyan-200 md:-ml-6">
            <span className="text-4xl font-semibold tracking-[0.35em] md:text-5xl">
              LAUNCH PREVIEW
            </span>
            <span className="hidden text-xs font-semibold tracking-[0.35em] sm:inline md:text-sm">
              INDIA | AUSTRALIA
            </span>
          </div>

          <div className="flex min-h-[420px] md:min-h-[460px] flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 md:-ml-20 lg:-ml-24">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                VAMS BIOME microbiome tests
              </p>
              <h1 className="mt-7 text-4xl font-extrabold text-slate-50 md:text-5xl lg:text-6xl">
                Get a head start on your microbiome health.
              </h1>
              <p className="mt-4 max-w-xl text-base text-sky-100/90 text-justify">
                Use at-home gut, vaginal, skin, and oral microbiome tests plus AI-powered reports to
                discover what&apos;s really happening inside—and move into targeted probiotics and
                protocols with confidence.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4">
                <Link
                  href="/well"
                  className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300"
                >
                  Explore kits
                </Link>
                <Link
                  href="/ai/report"
                  className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300"
                >
                  View report demo
                </Link>
                <Link
                  href="/campaign/gut"
                  className="text-sm font-semibold text-cyan-100 hover:text-cyan-50 md:ml-2"
                >
                  Is your gut holding you back?
                </Link>
              </div>
            </div>

            <div className="flex-1 space-y-8 mt-8 md:mt-0 md:pl-20 lg:pl-28">
              <div className="rounded-3xl bg-slate-900/80 p-10 lg:p-12 shadow-sm ring-1 ring-white/10">
                <h2 className="text-2xl font-semibold uppercase tracking-wide text-sky-200">
                  5 microbiome test kits
                </h2>
                <ul className="mt-4 grid gap-3 text-xl text-sky-100/90 sm:grid-cols-2">
                  <li className="whitespace-nowrap">• Gut microbiome test</li>
                  <li className="whitespace-nowrap">• Vaginal microbiome test</li>
                  <li className="whitespace-nowrap">• Skin microbiome test</li>
                  <li className="whitespace-nowrap">• Oral microbiome test</li>
                  <li className="sm:col-span-2 whitespace-nowrap">• Full-body microbiome panel</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-sky-900/80 p-8 lg:p-10 text-sky-50 ring-1 ring-white/10">
                <h3 className="text-2xl font-semibold uppercase tracking-wide text-sky-200">
                  Probiotic &amp; protocol highlights
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-xl text-sky-50/90">
                  <li className="whitespace-nowrap">• Targeted gut reset formulations</li>
                  <li className="whitespace-nowrap">• Women&apos;s synbiotic stacks</li>
                  <li className="whitespace-nowrap">• Skin &amp; oral microbiome care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto px-20">

        {/* Trust badges */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-sky-100 px-6 py-4 text-lg font-semibold tracking-wide text-slate-600">
            <span className="text-slate-800">Trusted foundations:</span>
            <span>ISO / CAP-aligned partner labs</span>
            <span>GMP production &amp; cold-chain logistics</span>
            <span>HIPAA / GDPR-conscious data flows</span>
            <span>Secure Stripe payments &amp; audited cloud infra</span>
          </div>
        </section>

        {/* Value propositions */}
        <section className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-lg">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">Precision diagnostics</h2>
            <p className="mt-2 text-lg text-slate-700 text-justify">
              Clinical-grade microbiome test kits for gut, vaginal, skin, and oral ecosystems. Science-validated and
              designed for easy at-home collection.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">AI-powered insights</h2>
            <p className="mt-2 text-lg text-slate-700 text-justify">
              Our AI engine connects sequencing data, lifestyle inputs, and health markers to deliver personalized diet,
              supplement, and lifestyle protocols.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">Therapeutic marketplace</h2>
            <p className="mt-2 text-lg text-slate-700 text-justify">
              Shop microbiome-friendly probiotics, synbiotics, women&apos;s health solutions, and functional foods—curated
              for efficacy and safety.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">Science, community, support</h2>
            <p className="mt-2 text-lg text-slate-700 text-justify">
              Learn from research, join our wellness community, and stay supported throughout your microbiome journey
              with clinicians and coaches.
            </p>
          </div>
        </section>

        {/* Diagnostic test kit highlights */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Diagnostic test kits</h2>
          <p className="mt-2 text-xl text-slate-700 text-justify">
            Start with the microbiome panel that matches your current priorities, then layer in AI insights and
            protocols as you go.
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-lg text-slate-700">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Gut microbiome test</h3>
              <p className="mt-1 text-base text-justify">
                Understand digestion, inflammation, SCFA potential, dysbiosis markers, and gut–brain interactions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Vaginal microbiome test</h3>
              <p className="mt-1 text-base text-justify">
                Analyze Lactobacillus dominance, dysbiosis, BV risk, pH balance, and reproductive health indicators.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Skin microbiome test</h3>
              <p className="mt-1 text-base text-justify">
                Assess microbiome balance related to acne, eczema, rosacea, and barrier health.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Oral microbiome test</h3>
              <p className="mt-1 text-base text-justify">
                Track oral pathogens, gum health risks, and the gut–oral axis contributing to systemic health.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Full-body microbiome panel</h3>
              <p className="mt-1 text-base text-justify">
                Combine gut, vaginal, skin, and oral insights in one integrated panel for a whole-body view.
              </p>
            </div>
          </div>

          <Link
            href="/diagnostics"
            className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Shop diagnostic kits
          </Link>
        </section>

        {/* How it works preview */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">How it works</h2>

          <div className="mt-4 grid gap-6 text-lg text-slate-700 md:grid-cols-5">
            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-lg font-semibold uppercase text-cyan-700">
                Step 1
              </span>
              <p className="mt-2 text-base">Order your kit</p>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-lg font-semibold uppercase text-cyan-700">
                Step 2
              </span>
              <p className="mt-2 text-base">Collect and ship your sample</p>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-lg font-semibold uppercase text-cyan-700">
                Step 3
              </span>
              <p className="mt-2 text-base">Lab + AI processing</p>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-lg font-semibold uppercase text-cyan-700">
                Step 4
              </span>
              <p className="mt-2 text-base">Get your interactive report</p>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-lg font-semibold uppercase text-cyan-700">
                Step 5
              </span>
              <p className="mt-2 text-base">Start your personalized plan</p>
            </div>
          </div>

          <Link
            href="/how-it-works"
            className="mt-8 inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
          >
            Explore the full journey
          </Link>
        </section>

        {/* Blog + newsletter preview */}
        <section className="mb-10 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">From the BiomeInsights blog</h2>
            <div className="mt-4 space-y-4 text-lg text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">
                  Gut–vaginal axis: why women&apos;s wellness starts in the microbiome
                </p>
                <p className="text-base text-slate-600">
                  Explore how gut and vaginal ecosystems talk to each other and what that means for cycles,
                  fertility, and mood.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Can your microbiome predict your skin health?</p>
                <p className="text-base text-slate-600">
                  Early research on the gut–skin axis, barrier function, and how microbial patterns map to flares.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">AI + microbiome: where precision wellness is heading</p>
                <p className="text-base text-slate-600">
                  A practical look at how AI can turn complex omics data into day-to-day decisions.
                </p>
              </div>
            </div>
            <Link
              href="/blog"
              className="mt-5 inline-flex text-lg font-semibold text-cyan-700 hover:text-cyan-800"
            >
              Read the blog &rarr;
            </Link>
          </div>
          <div className="rounded-2xl bg-sky-100 p-8">
            <h2 className="text-3xl font-semibold text-slate-900">
              Sign up to unlock your personalized wellness journey.
            </h2>
            <p className="mt-3 text-lg text-slate-700">
              Join the VAMS BIOME list for a Free Gut Guide, launch updates, and subscriber-only
              offers on diagnostics, probiotics, and new AI report features.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-slate-300 px-5 py-3 text-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600 whitespace-nowrap"
              >
                Join now
              </button>
            </form>
            <p className="mt-3 text-sm text-slate-500">
              No spam—just occasional, research-backed emails on diagnostics, AI features, and
              microbiome-safe products.
            </p>
          </div>
        </section>

        {/* BiomeMart featured products */}
        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">BiomeMart highlights</h2>
          <p className="mt-2 text-lg text-slate-700">
            Microbiome-safe formulations curated for gut, vaginal, skin, oral, and aquaculture ecosystems.
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-lg">
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">Gut Restore Probiotic</h3>
              <p className="mt-1 text-base text-slate-700">
                Multi-strain probiotic designed to support adult gut diversity, SCFA production, and barrier health.
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">Coming soon</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">FloraFemme Synbiotic</h3>
              <p className="mt-1 text-base text-slate-700">
                Urogenital-focused synbiotic stack for Lactobacillus support and pH balance.
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">Coming soon</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-slate-900">AquaGuard</h3>
              <p className="mt-1 text-base text-slate-700">
                Tri-stage aquaculture probiotic concept for water quality, feed efficiency, and stock resilience.
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">For pilot partners</p>
            </div>
          </div>
          <Link
            href="/products"
            className="mt-8 inline-flex text-lg font-semibold text-cyan-700 hover:text-cyan-800"
          >
            Shop all products &rarr;
          </Link>
        </section>

        {/* Products & Platforms */}
        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Products &amp; Platforms</h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-lg">
            <div>
              <h3 className="font-semibold text-slate-900">BiomeWell</h3>
              <p className="text-slate-700 text-base">
                Testing kits, sample registration, user dashboard.
              </p>
              <Link href="/well" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                Go to BiomeWell &rarr;
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">BiomeAI</h3>
              <p className="text-slate-700 text-base">
                AI-driven microbiome reports and PDF generation.
              </p>
              <Link href="/ai/report" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                View reports &rarr;
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">BiomeMart</h3>
              <p className="text-slate-700 text-base">
                Marketplace for probiotics, synbiotics, and therapeutics.
              </p>
              <Link href="/mart" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                Explore BiomeMart &rarr;
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">VAMSScape</h3>
              <p className="text-slate-700 text-base">
                Personalized health portal combining diet and microbiome insights.
              </p>
              <Link href="/scape" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                Open VAMSScape &rarr;
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">VAMSConnect</h3>
              <p className="text-slate-700 text-base">
                Telehealth platform for coaches and specialists.
              </p>
              <Link href="/connect" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                Book a session &rarr;
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Admin &amp; Partners</h3>
              <p className="text-slate-700 text-sm">
                CMS, partner dashboards, and analytics for labs, brands, and clinicians.
              </p>
              <Link href="/admin" className="text-cyan-700 text-lg font-semibold hover:text-cyan-800">
                Open admin &rarr;
              </Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}