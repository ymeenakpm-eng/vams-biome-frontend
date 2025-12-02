"use client";

import React, { useState } from "react";
import { ReportViewer } from "../../components/ReportViewer";

export default function ReportPage() {
  const [sampleId, setSampleId] = useState("test_sample_1");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-6">

        {/* Header + controls */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">VamsBiome AI-powered reports</h1>
            <p className="mt-2 text-sm text-slate-700 max-w-3xl text-justify">
              VamsBiome leverages a proprietary AI analytics platform to convert complex sequencing
              data into personalized, clinically relevant microbiome insights. Designed for labs,
              clinics, and telehealth providers, it provides a deep understanding of your gut and
              metabolic health, empowering targeted interventions for long-term wellness.
            </p>
          </div>

          <form
            className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="flex-1 text-sm font-medium text-slate-800">
              Enter the sample ID from your kit label or dashboard.
              <input
                value={sampleId}
                onChange={(e) => setSampleId(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                placeholder="e.g. test_sample_1"
              />
            </label>
          </form>

          {/* AI report overview */}
          <div className="grid gap-4 pt-4 text-sm text-slate-700 md:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Core outputs</h2>
              <ul className="mt-2 space-y-1 text-xs">
                <li>
                  <span className="font-semibold">Dysbiosis Index:</span> Measures overall gut microbial
                  balance.
                </li>
                <li>
                  <span className="font-semibold">Health Risk Analysis:</span> Predicts susceptibility to
                  PCOS, BV, diabetes, obesity, and other conditions.
                </li>
                <li>
                  <span className="font-semibold">SCFA Potential:</span> Evaluates short-chain fatty acid
                  production linked to gut and metabolic health.
                </li>
              </ul>

              <h2 className="mt-4 text-sm font-semibold text-slate-900">Personalised recommendations</h2>
              <ul className="mt-2 space-y-1 text-xs">
                <li>Customised diet plans to support microbial balance.</li>
                <li>Targeted probiotic strain suggestions based on individual microbiome profile.</li>
                <li>
                  Lifestyle interventions to enhance gut integrity, immunity, and metabolic
                  resilience.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">Delivery &amp; integration</h2>
              <ul className="mt-2 space-y-1 text-xs">
                <li>User-friendly PDF reports and web dashboards for clear insights.</li>
                <li>
                  API integration for labs, clinics, and telehealth platforms to streamline
                  workflow.
                </li>
              </ul>

              <h2 className="mt-4 text-sm font-semibold text-slate-900">Benefits</h2>
              <ul className="mt-2 space-y-1 text-xs">
                <li>Converts raw microbiome data into actionable health intelligence.</li>
                <li>
                  Supports precision nutrition, personalised probiotics, and lifestyle
                  interventions.
                </li>
                <li>
                  Enables proactive management of gut, metabolic, and reproductive health.
                </li>
                <li>
                  Enhances patient care and engagement in clinical or telehealth settings.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Report viewer frame */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="px-1 text-sm font-semibold text-slate-900">Your gut microbiome report</h2>
          <p className="px-1 text-xs text-slate-600">
            Preview the full report below. Use the button to download a PDF copy.
          </p>

          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
            <ReportViewer sampleId={sampleId} baseUrl="http://localhost:8000" />
          </div>
        </section>
      </div>
    </main>
  );
}