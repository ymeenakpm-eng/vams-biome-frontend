"use client";

import React, { useState } from "react";
import { ReportViewer } from "../../components/ReportViewer";

export default function ReportPage() {
  const [sampleId, setSampleId] = useState("test_sample_1");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-6">

        {/* Header + controls */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h1 className="text-2xl font-semibold text-slate-900">Gut report viewer</h1>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            Enter a sample ID to view the corresponding BiomeAI gut report. In later phases, this
            page will support skin and vaginal reports as well.
          </p>

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