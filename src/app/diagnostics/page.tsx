"use client";

import Link from "next/link";
import Image from "next/image";

export default function DiagnosticsPage() {
  return (
    <main className="min-h-screen bg-sky-50 py-16">
      <div className="mx-auto px-20">
        <header className="mb-12 flex min-h-[calc(100vh-120px)] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">
              BiomeWell Diagnostics
            </p>
            <h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
              At-home microbiome testing for everyday health decisions
            </h1>
            <p className="mt-4 max-w-2xl text-2xl text-slate-600 text-justify">
              Choose from gut, vaginal, skin, oral, and full-body microbiome panels designed for
              real-world use in India, Australia, and beyond. Each kit connects directly into BiomeAI
              for simple, visual reports.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start gap-5 md:items-end">
            <div className="relative hidden h-56 w-full overflow-hidden rounded-2xl bg-slate-200 md:block lg:h-72">
              <Image
                src="/images/lab-hero.jpg"
                alt="Lab processing VAMS BIOME microbiome test kits"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex gap-4">
            <Link
              href="/products"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Shop microbiome kits
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              How it works
            </Link>
            </div>
          </div>
        </header>

        <section className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-lg">
          {/* 5 Test Kits Overview */}
          <article className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/lab-hero.jpg"
                alt="GUT HIM men&apos;s microbiome test kit visual"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-slate-900">GUT HIM – Men&apos;s Microbiome Test Kit</h2>
              <p className="text-xl text-slate-600 text-justify">
                A men-focused at-home microbiome test that analyzes dysbiosis, SCFA-producing
                microbes, gut barrier integrity, and key markers tied to metabolic and hormonal
                health. Get personalized insights to optimize digestion, energy, and overall wellness.
              </p>
            <Link
              href="/products/gut-kit"
              className="mt-3 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-800"
            >
              View full kit details &gt;
            </Link>
            </div>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/lab-hero.jpg"
                alt="GUT HER women&apos;s microbiome test kit visual"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-slate-900">GUT HER – Women&apos;s Microbiome Test Kit</h2>
              <p className="text-xl text-slate-600 text-justify">
                A comprehensive women-specific microbiome test that evaluates dysbiosis,
                SCFA-producing microbes, gut barrier strength, and gut–metabolic health
                connections. Receive tailored recommendations to support digestion, hormones,
                skin, and long-term wellness.
              </p>
              <Link
                href="/products/gut-her"
                className="mt-3 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                View details &gt;
              </Link>
            </div>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/lab-hero.jpg"
                alt="VAGI-HER vaginal microbiome test kit visual"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-slate-900">VAGI-HER – Vaginal Microbiome Test Kit</h2>
              <p className="text-xl text-slate-600 text-justify">
                An at-home test that assesses Lactobacillus dominance, BV risk, Candida
                overgrowth, and fertility-linked microbiome markers. Get clear insights into your
                intimate health and personalized recommendations for balanced, infection-resistant
                vaginal wellness.
              </p>
              <Link
                href="/products/vagi-her"
                className="mt-3 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                View details &gt;
              </Link>
            </div>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm flex gap-4">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/biomemart-kit.jpg"
                alt="Skin microbiome test kit packaging"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-slate-900">SKIN-HER – Skin Microbiome Test Kit</h2>
              <p className="text-xl text-slate-600 text-justify">
                A powerful at-home test that identifies microbial drivers of acne, eczema, and
                skin barrier issues. SKIN-HER uncovers your skin&apos;s unique microbiome
                imbalances and provides personalized, science-backed recommendations for clearer,
                calmer, healthier skin.
              </p>
              <Link
                href="/products/skin-her"
                className="mt-3 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                View details &gt;
              </Link>
            </div>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1 flex gap-4">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/lab-hero.jpg"
                alt="Gut–Hormone Axis Panel kit visual"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-slate-900">Gut–Hormone Axis Panel</h2>
              <p className="text-xl text-slate-600 text-justify">
                A comprehensive panel that uncovers how your gut microbiome influences hormonal
                balance. It provides integrative insights into PCOS, estrogen recycling, and
                gut–endocrine crosstalk, helping you understand symptoms and optimize hormone
                health with personalized recommendations.
              </p>
              <Link
                href="/products/gut-hormone-axis"
                className="mt-3 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                View details &gt;
              </Link>
            </div>
          </article>
        </section>

        <section className="mb-16 grid gap-8 md:grid-cols-2 text-lg">
          {/* Sample Workflow */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-semibold text-slate-900">Sample workflow</h2>
            <ol className="space-y-3 text-base text-slate-700">
              <li>1. Activate your kit online in under 2 minutes.</li>
              <li>2. Follow sample collection guides tailored to your kit type.</li>
              <li>3. Ship your sample using pre-paid, trackable shipping.</li>
              <li>4. Get notified at each stage: received, processing, report ready.</li>
            </ol>
          </div>

          {/* Reports & AI Linking */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-semibold text-slate-900">Reports & AI insights</h2>
            <p className="mb-4 text-base text-slate-600 text-justify">
              Every test kit is wired into BiomeAI so you receive clear, visual summaries instead of raw
              spreadsheets or jargon-heavy PDFs.
            </p>
            <ul className="space-y-3 text-base text-slate-700">
              <li>• View reports with diversity scores and key pathways.</li>
              <li>• Unlock AI-enhanced insights and red flag summaries.</li>
              <li>• Receive personalized food, supplement, and lifestyle protocols.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              VAMS BIOME tests are for informational and wellness use and are not a replacement for
              medical diagnosis or emergency care. Always discuss results with your healthcare
              professional.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 p-6 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Ready to start with BiomeWell?</h2>
              <p className="mt-1 text-sm text-cyan-50">
                Choose a kit today and connect your results to AI-driven insights and product guidance.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/products"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400"
              >
                Browse kits
              </Link>
              <Link
                href="/ai-insights"
                className="rounded-full border border-cyan-100 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500/20"
              >
                Explore AI insights
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
