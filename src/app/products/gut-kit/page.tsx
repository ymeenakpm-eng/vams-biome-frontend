"use client";

import { useState } from "react";

const TABS = ["Whats Inside", "Benefits", "AI Report", "Reviews", "FAQs"] as const;

type TabId = (typeof TABS)[number];

export default function GutKitPage() {
  const [activeTab, setActiveTab] = useState<TabId>("Whats Inside");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Microbiome Test Kit
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            GUT HIM / HER  Advanced Gut Microbiome Test Kit
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700 text-justify">
            The GUT HIM Microbiome Test Kit is a science-backed at-home gut health assessment
            designed specifically for men. Using advanced DNA sequencing, this test analyses the
            balance of gut bacteria to identify dysbiosis, the abundance of SCFA-producing
            microbes, and the overall gut barrier integrity—all crucial foundations for digestive
            comfort, energy, immunity, and metabolic performance.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-700 text-justify">
            This male-specific report reveals how your microbiome may influence weight regulation,
            hormonal balance, inflammation, athletic recovery, and long-term metabolic health. With
            personalised insights and actionable recommendations, GUT HIM empowers men to make
            targeted diet and lifestyle upgrades for stronger gut resilience and peak daily
            performance.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
            <a
              href="/diagnostics"
              className="inline-flex rounded-full bg-cyan-500 px-4 py-2 text-white shadow-sm hover:bg-cyan-600"
            >
              Get My Kit
            </a>
            <a
              href="/ai/report"
              className="inline-flex rounded-full border border-cyan-200 px-4 py-2 text-cyan-700 hover:bg-cyan-50"
            >
              See Sample Report
            </a>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2 border-b border-slate-200 pb-1 text-xs font-semibold text-slate-600">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 transition-colors ${
                activeTab === tab
                  ? "bg-cyan-500 text-white"
                  : "bg-transparent text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm text-sm text-slate-800">
          {activeTab === "Whats Inside" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Whats inside the kit</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>At-home stool collection kit with clear, step-by-step instructions.</li>
                <li>
                  Pre-labelled, prepaid return packaging for secure, trackable shipping to partner labs.
                </li>
                <li>
                  DNA-based microbiome sequencing of your gut bacteria, including diversity and key taxa.
                </li>
                <li>
                  Analysis of dysbiosis markers, SCFA-producing microbes, and gut barrier integrity
                  signals.
                </li>
                <li>
                  A BiomeAI report with scores, risk flags, and personalized recommendations delivered in
                  your VAMS BIOME dashboard.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Benefits" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Key benefits &amp; features</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>Evaluates dysbiosis and overall microbiome balance.</li>
                <li>
                  Measures SCFA-producing bacteria for metabolic and gut energy support.
                </li>
                <li>
                  Assesses gut barrier integrity related to inflammation and immunity.
                </li>
                <li>
                  Analyses microbiome markers linked to metabolic and hormonal health.
                </li>
                <li>Delivers male-focused insights and tailored recommendations.</li>
                <li>
                  Simple, discreet at-home sample collection with digital report access.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "AI Report" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Inside your BiomeAI report</h2>
              <p className="text-xs text-slate-700">
                Each GUT HIM / HER kit connects directly to BiomeAI, turning complex sequencing output
                into a visual, clinician-ready report.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>Dysbiosis and Gut Health Index scores.</li>
                <li>Microbial diversity and keystone species overview.</li>
                <li>
                  SCFA and metabolic pathway potential linked to digestion, energy, and metabolic risk.
                </li>
                <li>Red flag markers for pathobionts and overgrowth patterns.</li>
                <li>Symptom-aligned pattern detection mapped to your intake questionnaire.</li>
                <li>Personalized food lists (add / minimize / avoid) and protocol suggestions.</li>
              </ul>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Reviews</h2>
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">\"Finally made sense of my gut issues.\"</p>
                  <p>
                    The report highlighted specific patterns that matched my symptoms, and the
                    suggestions felt realistic rather than extreme.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">Pilot participant, 34  Bengaluru</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">\"Helpful before changing my diet.\"</p>
                  <p>
                    I used the kit before making big diet shifts so I could track what actually changed
                    in my microbiome.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">Pilot participant, 29  Melbourne</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "FAQs" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">FAQs</h2>
              <dl className="space-y-3 text-xs text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Is this a diagnostic test?</dt>
                  <dd>
                    No. This kit is for informational and wellness use only and is not intended to
                    diagnose, treat, cure, or prevent any disease. Always discuss results with your
                    healthcare professional.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">How long do results take?</dt>
                  <dd>
                    Turnaround times may vary by region and pilot phase, but most reports are available
                    within 34 weeks after your sample reaches the lab.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">How is my data handled?</dt>
                  <dd>
                    Samples are processed in partner labs with ISO / CAP-aligned quality systems, and
                    BiomeAI uses HIPAA / GDPR-conscious data flows with encryption in transit and at
                    rest.
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
