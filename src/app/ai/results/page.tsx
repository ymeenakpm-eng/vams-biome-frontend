"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AiResultsLookupPage() {
  const [sampleId, setSampleId] = useState("");
  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const API_BASE = "http://localhost:8000";

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobId) {
      setError("Enter a job ID from the upload response to check status.");
      return;
    }
    setError(null);
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/job/${jobId}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setStatus(`${data.status}: ${data.message || ""}`);
    } catch (err: any) {
      setError(err.message || "Failed to check status");
    } finally {
      setLoading(false);
    }
  };

  const handleViewReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sampleId) {
      setError("Enter a sample ID to view a report.");
      return;
    }
    setError(null);
    router.push(`/ai/report?sample_id=${encodeURIComponent(sampleId)}`);
  };

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 space-y-8">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">
            BiomeAI – Results &amp; Status
          </h1>
          <p className="text-sm text-slate-700 mb-4">
            Use your job ID to check pipeline status, and your sample ID to open the final report.
          </p>

          <form onSubmit={handleCheckStatus} className="space-y-3 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-800">
                Job ID
                <input
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  value={jobId}
                  onChange={(e) => setJobId(e.target.value)}
                  placeholder="Paste job ID from upload_and_score response"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 disabled:opacity-60"
            >
              {loading ? "Checking..." : "Check status"}
            </button>
            {status && <p className="text-sm text-slate-800 mt-2">Status: {status}</p>}
          </form>

          <hr className="my-4" />

          <form onSubmit={handleViewReport} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-800">
                Sample ID
                <input
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  value={sampleId}
                  onChange={(e) => setSampleId(e.target.value)}
                  placeholder="e.g. test_sample_1"
                />
              </label>
            </div>
            <button
              type="submit"
              className="rounded-full border border-cyan-600 px-5 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Open report in BiomeAI
            </button>
          </form>

          {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
        </section>
      </div>
    </main>
  );
}