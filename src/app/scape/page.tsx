"use client";

import React, { useState } from "react";

const API_BASE = "http://localhost:8000";

type Summary = {
  sample_id: string;
  body_site: string;
  overall_assessment?: string;
  risk_flags?: string[];
};

export default function VamsScapePage() {
  const [sampleId, setSampleId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [planChecks, setPlanChecks] = useState({
    fiber: false,
    hydration: false,
    movement: false,
  });
  const [reflection, setReflection] = useState("");
  const [savedReflection, setSavedReflection] = useState<string | null>(null);

  const handleLoadSummary = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSummary(null);

    if (!sampleId) {
      setError("Enter a sample ID to load your latest report summary.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/results/${encodeURIComponent(sampleId)}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const data = await res.json();
      const results = data.results || {};

      const s: Summary = {
        sample_id: data.sample_id,
        body_site: results.body_site || "gut",
        overall_assessment: results.overall_assessment,
        risk_flags: results.risk_flags || [],
      };

      setSummary(s);
    } catch (err: any) {
      setError(err.message || "Failed to load summary");
    } finally {
      setLoading(false);
    }
  };

  const togglePlan = (key: "fiber" | "hydration" | "movement") => {
    setPlanChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflection.trim()) return;
    setSavedReflection(reflection.trim());
  };

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        {/* Intro */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">
            VAMSScape – Personalized Health &amp; Wellness
          </h1>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            VAMSScape connects your microbiome reports with daily habits. In future releases,
            you&apos;ll be able to log meals, track symptoms, and visualize how your gut, skin, and
            vaginal microbiomes respond over time.
          </p>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            For now, you can pull a quick summary of your latest BiomeAI report using your sample ID.
          </p>
        </section>

        {/* Report summary lookup */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Your microbiome snapshot</h2>
          <form onSubmit={handleLoadSummary} className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
              value={sampleId}
              onChange={(e) => setSampleId(e.target.value)}
              placeholder="Enter sample ID (e.g. test_sample_1)"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 disabled:opacity-60"
            >
              {loading ? "Loading..." : "Load summary"}
            </button>
          </form>

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          {summary && (
            <div className="mt-4 rounded-xl bg-sky-50 p-4 text-sm text-slate-800">
              <p>
                <span className="font-semibold">Sample:</span> {summary.sample_id} (
                {summary.body_site})
              </p>
              {summary.overall_assessment && (
                <p className="mt-1">
                  <span className="font-semibold">Overall assessment:</span>{" "}
                  {summary.overall_assessment}
                </p>
              )}
              {summary.risk_flags && summary.risk_flags.length > 0 && (
                <div className="mt-2">
                  <span className="font-semibold">Key flags:</span>
                  <ul className="mt-1 list-disc pl-5">
                    {summary.risk_flags.map((flag, i) => (
                      <li key={i}>{flag}</li>
                    ))}
                  </ul>
                </div>
              )}
              {(!summary.risk_flags || summary.risk_flags.length === 0) && (
                <p className="mt-1 text-slate-700">No major risk flags recorded in this report.</p>
              )}
            </div>
          )}

          {summary && (
            <p className="mt-3 text-xs text-slate-600">
              For full details and PDF, open{" "}
              <code>/ai/report?sample_id={summary.sample_id}</code> in BiomeAI.
            </p>
          )}
        </section>

        {/* Food focus for today */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Food focus for today</h2>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            These are general microbiome-supportive ideas. In future, they&apos;ll be tailored to
            your BiomeAI profile.
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm">
            <div>
              <h3 className="font-semibold text-slate-900">Lean into</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-800">
                <li>Colourful vegetables and fruits (polyphenols &amp; fibre)</li>
                <li>Whole grains, lentils, and millets</li>
                <li>Fermented foods in moderation (curd, kefir, kanji, idli/dosa batter)</li>
                <li>Healthy fats from nuts, seeds, and cold-pressed oils</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Go easy on</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-800">
                <li>Ultra-processed snacks and sugary drinks</li>
                <li>Very high added sugar desserts</li>
                <li>Excessive late-night heavy meals</li>
                <li>Unnecessary antibiotics / self-medication (always consult your doctor)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Today’s plan checklist */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Today&apos;s plan</h2>
          <p className="mt-2 text-sm text-slate-700">
            Use this lightweight checklist to keep your microbiome-supportive habits on track.
          </p>
          <div className="mt-3 space-y-2 text-sm text-slate-800">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={planChecks.fiber}
                onChange={() => togglePlan("fiber")}
              />
              <span>Hit at least one high-fibre meal today</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={planChecks.hydration}
                onChange={() => togglePlan("hydration")}
              />
              <span>Stay hydrated through the day (small sips, not chugging)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={planChecks.movement}
                onChange={() => togglePlan("movement")}
              />
              <span>At least 10–15 minutes of gentle movement or walking</span>
            </label>
          </div>
        </section>

        {/* End of day reflection */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">End of day reflection</h2>
          <p className="mt-2 text-sm text-slate-700">
            At the end of your day, jot down how your energy, digestion, mood, or skin felt. In
            future, this will sync with your microbiome trends and VAMSConnect coaches.
          </p>
          <form onSubmit={handleSaveReflection} className="mt-3 space-y-3">
            <textarea
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
              rows={4}
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Example: Felt less bloated after lunch, energy dip around 4 pm..."
            />
            <button
              type="submit"
              className="rounded-full border border-cyan-200 px-5 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Save note (local only)
            </button>
          </form>
          {savedReflection && (
            <div className="mt-3 rounded-md bg-sky-50 p-3 text-sm text-slate-800">
              <p className="font-semibold">Last saved note:</p>
              <p className="mt-1 whitespace-pre-line">{savedReflection}</p>
            </div>
          )}
        </section>

        {/* Coming soon: tracking */}
        <section className="rounded-2xl bg-sky-100 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Coming soon: diet &amp; lifestyle</h2>
          <p className="mt-2 text-sm text-slate-700 max-w-3xl">
            VAMSScape will soon allow you to log meals, sleep, stress, and movement, and connect
            them with microbiome indices like SCFA production, diversity, and dysbiosis risk.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-800 md:grid-cols-3">
            <li>• Daily food and symptom logging</li>
            <li>• Trend charts across multiple microbiome tests</li>
            <li>• Habit nudges based on your BiomeAI profile</li>
          </ul>
        </section>
      </div>
    </main>
  );
}