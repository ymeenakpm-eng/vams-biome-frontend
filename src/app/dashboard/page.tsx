"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        {/* Header */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">My VAMS BIOME dashboard</h1>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            This dashboard will eventually reflect your kits, reports, recommendations, and
            upcoming consults. For now, use it as a navigation hub into each platform.
          </p>
        </section>

        {/* Quick actions */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link
              href="/well"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Order / register a kit
            </Link>
            <Link
              href="/ai/results"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              View my reports
            </Link>
            <Link
              href="/products"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Explore products
            </Link>
            <Link
              href="/scape"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Open wellness portal
            </Link>
            <Link
              href="/connect"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Request a consult
            </Link>
          </div>
        </section>

        {/* Cards for each platform */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">My ecosystem</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
            <DashCard
              title="BiomeWell"
              desc="Track your kits and registered samples."
              href="/well"
              cta="Go to BiomeWell"
            />
            <DashCard
              title="BiomeAI"
              desc="See your microbiome reports and download PDFs."
              href="/ai/results"
              cta="See reports"
            />
            <DashCard
              title="BiomeMart"
              desc="Browse microbiome-supportive products and subscription ideas."
              href="/products"
              cta="Open marketplace"
            />
            <DashCard
              title="VAMSScape"
              desc="Review your snapshot and keep today’s plan on track."
              href="/scape"
              cta="Open VAMSScape"
            />
            <DashCard
              title="VAMSConnect"
              desc="Explore telehealth and coaching options (coming soon)."
              href="/connect"
              cta="Open VAMSConnect"
            />
            <DashCard
              title="Account & settings"
              desc="Account details and preferences will appear here in a future release."
              href="/login"
              cta="Go to login"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function DashCard(props: { title: string; desc: string; href: string; cta: string }) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-sky-50/40 p-4">
      <h3 className="text-sm font-semibold text-slate-900">{props.title}</h3>
      <p className="mt-2 text-xs text-slate-700">{props.desc}</p>
      <Link
        href={props.href}
        className="mt-3 inline-flex rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
      >
        {props.cta}
      </Link>
    </article>
  );
}