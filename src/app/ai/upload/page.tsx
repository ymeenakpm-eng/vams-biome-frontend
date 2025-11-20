"use client";

import React, { useState } from "react";

const API_BASE = "http://localhost:8000";

export default function AiUploadPage() {
  const [sampleId, setSampleId] = useState("");
  const [bodySite, setBodySite] = useState<"gut" | "vaginal" | "skin" | "oral">("gut");
  const [forwardPath, setForwardPath] = useState("");
  const [reversePath, setReversePath] = useState("");
  const [pairedEnd, setPairedEnd] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [statusUrl, setStatusUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setJobId(null);
    setStatusUrl(null);

    if (!sampleId || !forwardPath) {
      setError("Please provide a sample ID and forward read path.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/upload_and_score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sample_id: sampleId,
          body_site: bodySite,
          paired_end: pairedEnd,
          forward_read_path: forwardPath,
          reverse_read_path: pairedEnd ? reversePath || null : null,
          alpha_diversity: null,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = await res.json();
      setJobId(data.job_id);
      setStatusUrl(data.status_url);
      setMessage("Analysis started. You can check status and later view the report in BiomeAI.");
    } catch (err: any) {
      setError(err.message || "Failed to start analysis");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">
          Upload &amp; Score (BiomeAI)
        </h1>
        <p className="text-sm text-slate-700 mb-6">
          This form triggers the full analysis pipeline for an existing FASTQ file path inside the
          backend container. Later this can be replaced with direct file upload.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
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

          <div>
            <label className="block text-sm font-medium text-slate-800">
              Body site
              <select
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={bodySite}
                onChange={(e) => setBodySite(e.target.value as any)}
              >
                <option value="gut">Gut</option>
                <option value="vaginal">Vaginal</option>
                <option value="skin">Skin</option>
                <option value="oral">Oral</option>
              </select>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="paired"
              type="checkbox"
              checked={pairedEnd}
              onChange={(e) => setPairedEnd(e.target.checked)}
            />
            <label htmlFor="paired" className="text-sm text-slate-800">
              Paired-end data
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              Forward read path (inside backend, e.g. /app/data/SRR..._1.fastq)
              <input
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                value={forwardPath}
                onChange={(e) => setForwardPath(e.target.value)}
                placeholder="/app/data/SRR17194219_1.fastq"
              />
            </label>
          </div>

          {pairedEnd && (
            <div>
              <label className="block text-sm font-medium text-slate-800">
                Reverse read path (optional for now)
                <input
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  value={reversePath}
                  onChange={(e) => setReversePath(e.target.value)}
                />
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 disabled:opacity-60"
          >
            {loading ? "Starting analysis..." : "Start analysis"}
          </button>

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
          {message && (
            <p className="text-sm text-green-700 mt-2">
              {message}{" "}
              {jobId && (
                <>
                  Job ID: <code className="text-xs bg-slate-100 px-1">{jobId}</code>
                </>
              )}
            </p>
          )}

          {statusUrl && (
            <p className="text-xs text-slate-600 mt-1">
              Status endpoint: <code>{statusUrl}</code> (relative to backend)
            </p>
          )}

          {sampleId && (
            <p className="text-xs text-slate-600 mt-1">
              When analysis is done, open{" "}
              <code>/ai/report?sample_id={sampleId}</code> to view the report.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}