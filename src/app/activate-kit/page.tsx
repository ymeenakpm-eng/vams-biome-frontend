"use client";

import React, { useState } from "react";

export default function ActivateKitPage() {
  const [kitId, setKitId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kitId.trim() || !email.trim()) return;
    setMessage("Kit activation is not yet connected. This is a placeholder page.");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Utility</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Activate kit</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            Link your physical kit to your account so results can be delivered digitally. This page is a placeholder
            until activation is connected.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleActivate} className="space-y-5 text-base">
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="kit">
                Kit ID
              </label>
              <input
                id="kit"
                value={kitId}
                onChange={(e) => setKitId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="e.g. GUT-KIT-000123"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Activate (placeholder)
            </button>

            {message && <p className="text-sm text-slate-700">{message}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}
