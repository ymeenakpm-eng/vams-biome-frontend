"use client";

import React, { useEffect, useState } from "react";

type Kit = {
  id: string;
  name: string;
  description: string;
  body_site: string;
  price: number;
};

type SampleRegistrationResponse = {
  sample_id: string;
  message: string;
};

const BIOMEWELL_API_BASE = "http://localhost:8000";

export default function BiomeWellPage() {
  const [kits, setKits] = useState<Kit[]>([]);
  const [loadingKits, setLoadingKits] = useState(false);
  const [kitsError, setKitsError] = useState<string | null>(null);

  const [selectedKitId, setSelectedKitId] = useState<string>("");
  const [sampleId, setSampleId] = useState<string>("");
  const [registerMessage, setRegisterMessage] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    const fetchKits = async () => {
      setLoadingKits(true);
      setKitsError(null);
      try {
        const res = await fetch(`${BIOMEWELL_API_BASE}/biomewell/kits`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Kit[];
        setKits(data);
        if (data.length > 0) setSelectedKitId(data[0].id);
      } catch (e: any) {
        setKitsError(e.message || "Failed to load kits");
      } finally {
        setLoadingKits(false);
      }
    };

    fetchKits();
  }, []);

  const handleRegisterSample = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sampleId || !selectedKitId) {
      setRegisterError("Please enter a sample ID and select a kit.");
      return;
    }

    setRegistering(true);
    setRegisterError(null);
    setRegisterMessage(null);

    try {
      const res = await fetch(`${BIOMEWELL_API_BASE}/biomewell/register_sample`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sample_id: sampleId, kit_id: selectedKitId }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = (await res.json()) as SampleRegistrationResponse;
      setRegisterMessage(
        `${data.message}. You can later view the report in BiomeAI using sample ID: ${data.sample_id}.`
      );
      setSampleId("");
    } catch (e: any) {
      setRegisterError(e.message || "Failed to register sample");
    } finally {
      setRegistering(false);
    }
  };

  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* Intro */}
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold text-slate-900">BiomeWell – Testing kits</h1>
          <p className="mt-3 text-base text-slate-700 max-w-3xl text-justify">
            Choose a microbiome kit and register your sample. Once processed, your results will
            appear in BiomeAI as a detailed, AI-supported report.
          </p>
        </section>

        {/* Kits list + registration form */}
        <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2 text-base">
          {/* Available kits */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Available kits</h2>
            <p className="mt-2 text-sm text-slate-600">
              Phase 1 kits are hard-coded for demo. In production this will connect to your LIMS.
            </p>

            {loadingKits && <p className="mt-3 text-base text-slate-700">Loading kits…</p>}
            {kitsError && <p className="mt-3 text-base text-red-600">{kitsError}</p>}
            {!loadingKits && !kitsError && kits.length === 0 && (
              <p className="mt-3 text-base text-slate-700">No kits available yet.</p>
            )}

            {kits.length > 0 && (
              <ul className="mt-4 space-y-4 text-base">
                {kits.map((kit) => (
                  <li
                    key={kit.id}
                    className="rounded-xl border border-slate-100 bg-sky-50/40 p-3"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <p className="text-base font-semibold text-slate-900">{kit.name}</p>
                        <p className="mt-1 text-sm text-slate-700 text-justify">{kit.description}</p>
                      </div>
                      <div className="text-right text-xs text-slate-700">
                        <p className="font-semibold">₹{kit.price}</p>
                        <p className="mt-0.5 text-[11px] text-slate-500">{kit.body_site}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Register a sample */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Register a sample</h2>
            <p className="mt-2 text-sm text-slate-600 text-justify">
              Use the sample ID printed on the kit label. This links your physical sample to the
              digital report.
            </p>

            <form onSubmit={handleRegisterSample} className="mt-5 space-y-4 text-base">
              <div>
                <label className="block text-base font-medium text-slate-800">
                  Sample ID
                  <input
                    type="text"
                    value={sampleId}
                    onChange={(e) => setSampleId(e.target.value)}
                    className="mt-1 w-full rounded-md border border-slate-200 px-4 py-3 text-base"
                    placeholder="e.g. GUT-001, PILOT-123"
                  />
                </label>
              </div>

              <div>
                <label className="block text-base font-medium text-slate-800">
                  Kit
                  <select
                    value={selectedKitId}
                    onChange={(e) => setSelectedKitId(e.target.value)}
                    className="mt-1 w-full rounded-md border border-slate-200 px-4 py-3 text-base bg-white"
                  >
                    {kits.map((kit) => (
                      <option key={kit.id} value={kit.id}>
                        {kit.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                disabled={registering}
                className="w-full rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600 disabled:opacity-60"
              >
                {registering ? "Registering…" : "Register sample"}
              </button>

              {registerError && <p className="text-sm text-red-600">{registerError}</p>}
              {registerMessage && <p className="text-sm text-emerald-700">{registerMessage}</p>}

              <p className="mt-3 text-xs text-slate-600 text-justify">
                After the lab finishes processing, you can view this sample in BiomeAI under
                <span className="font-semibold"> "View my reports"</span> using the same sample ID.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}