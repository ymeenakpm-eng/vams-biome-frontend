"use client";

import React, { useState } from "react";

export default function TrackKitPage() {
  const [kitId, setKitId] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kitId.trim()) return;
    setStatus("Tracking is not yet connected. This is a placeholder page.");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Utility</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Track kit</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            Enter your kit or sample ID to see status updates. This page is a placeholder until shipping/LIMS
            tracking is connected.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleTrack} className="space-y-5 text-base">
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="kit">
                Kit / Sample ID
              </label>
              <input
                id="kit"
                value={kitId}
                onChange={(e) => setKitId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="e.g. GUT-001 or PILOT-123"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Track (placeholder)
            </button>

            {status && <p className="text-sm text-slate-700">{status}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}
