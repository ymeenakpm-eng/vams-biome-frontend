"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ReportViewer, ReportViewerHandle } from "../../components/ReportViewer";

export default function ReportPage() {
  const [sampleId, setSampleId] = useState("test_sample_1");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const viewerRef = useRef<ReportViewerHandle | null>(null);

  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto px-20 space-y-8">

        {/* Header hero */}
        <section className="flex flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div className="flex flex-1 flex-col space-y-5 md:max-w-2xl">

            <h1 className="text-5xl font-semibold text-slate-900 md:text-6xl">VamsBiome AI-powered reports</h1>

            <p className="mt-2 max-w-3xl text-xl text-slate-700 text-justify">
              VamsBiome leverages a proprietary AI analytics platform to convert complex sequencing
              data into personalized, clinically relevant microbiome insights. Designed for labs,
              clinics, and telehealth providers, it provides a deep understanding of your gut and
              metabolic health, empowering targeted interventions for long-term wellness.
            </p>
          </div>

          <div className="relative hidden h-40 flex-1 overflow-hidden rounded-2xl bg-slate-900/80 md:block lg:h-52">
            <Image
              src="/images/lab-hero.jpg"
              alt="Lab processing microbiome samples for AI reporting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* AI report overview */}
        <section className="grid gap-6 text-xl text-slate-700 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Core outputs</h2>
            <ul className="mt-3 space-y-2 text-lg">
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

            <h2 className="mt-5 text-3xl font-semibold text-slate-900">Personalised recommendations</h2>
            <ul className="mt-3 space-y-2 text-lg">
              <li>Customised diet plans to support microbial balance.</li>
              <li>Targeted probiotic strain suggestions based on individual microbiome profile.</li>
              <li>
                Lifestyle interventions to enhance gut integrity, immunity, and metabolic
                resilience.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Delivery &amp; integration</h2>
            <ul className="mt-3 space-y-2 text-lg">
              <li>User-friendly PDF reports and web dashboards for clear insights.</li>
              <li>
                API integration for labs, clinics, and telehealth platforms to streamline
                workflow.
              </li>
            </ul>

            <h2 className="mt-5 text-3xl font-semibold text-slate-900">Benefits</h2>
            <ul className="mt-3 space-y-2 text-lg">
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
        </section>

        {/* Report viewer frame */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="px-1 mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div>

              <h2 className="text-xl font-semibold text-slate-900 sm:ml-32">Your gut microbiome report</h2>

              <p className="text-sm text-slate-600 whitespace-nowrap">
                Enter a sample ID, then use the Generate report button to create and download a PDF copy.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-1 sm:ml-8 sm:items-start sm:justify-end"
            >

              <span className="text-sm font-medium text-slate-800">
                Enter the sample ID from your kit label or dashboard.
              </span>

              <div className="mt-1 flex flex-row items-center gap-2">
                <input
                  value={sampleId}
                  onChange={(e) => setSampleId(e.target.value)}
                  className="w-full max-w-xs rounded-md border border-slate-300 px-4 py-2 text-sm"
                  placeholder="e.g. test_sample_1"
                />

                <button
                  type="button"
                  onClick={async () => {
                    // Trigger a refetch in the ReportViewer by bumping refreshKey
                    setRefreshKey((k) => k + 1);
                  }}
                  disabled={loading}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${
                    loading
                      ? "bg-cyan-300 cursor-not-allowed"
                      : "bg-cyan-500 hover:bg-cyan-600"
                  }`}
                >
                  {loading ? "Processing…" : "Generate report"}
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    if (viewerRef.current) {
                      await viewerRef.current.downloadPdf();
                    }
                  }}
                  className="whitespace-nowrap rounded-full border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-600 shadow-sm hover:bg-cyan-50"
                >
                  Download PDF
                </button>
              </div>

              {loading && (
                <p className="mt-1 text-xs text-slate-500">
                  Fetching analysis results from the VamsBiome engine…
                </p>
              )}
            </form>
          </div>

          <div className="mt-3 mx-auto max-w-3xl">
            <ReportViewer
              ref={viewerRef}
              sampleId={sampleId}
              baseUrl="http://localhost:8000"
              onLoadingChange={setLoading}
              refreshKey={refreshKey}
            />
          </div>
        </section>

      </div>
    </main>
  );
}