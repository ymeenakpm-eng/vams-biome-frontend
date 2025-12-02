"use client";

import React, { useState } from "react";
import Link from "next/link";

type Concern = "gut" | "women" | "skin" | "oral" | "general";

const practitioners: {
  id: string;
  name: string;
  role: string;
  focus: Concern[];
  summary: string;
}[] = [
  {
    id: "coach_1",
    name: "Microbiome Health Coach",
    role: "Health coach",
    focus: ["gut", "general"],
    summary: "Helps you translate your BiomeAI report into daily food and lifestyle changes.",
  },
  {
    id: "coach_2",
    name: "Women’s Hormone & Gut Coach",
    role: "Women’s health coach",
    focus: ["women", "gut"],
    summary: "Focuses on PCOS, PMS, and vaginal microbiome-supportive routines.",
  },
  {
    id: "coach_3",
    name: "Skin Microbiome Specialist",
    role: "Dermatology-aligned coach",
    focus: ["skin"],
    summary: "Links acne, barrier health, and skincare routines with your gut–skin axis.",
  },
];

export default function VamsConnectPage() {
  const [concern, setConcern] = useState<Concern>("gut");

  const filtered = practitioners.filter((p) => p.focus.includes(concern) || p.focus.includes("general"));

  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* Intro */}
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold text-slate-900">
            VAMSConnect – Telehealth &amp; Coaching
          </h1>
          <p className="mt-3 text-base text-slate-700 max-w-3xl text-justify">
            VAMSConnect links your microbiome data with coaches and specialists. Share your BiomeAI
            reports, VAMSScape logs, and daily questions in one place.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link
              href="/ai/report"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              View BiomeAI report
            </Link>
            <Link
              href="/scape"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Open VAMSScape
            </Link>
          </div>
        </section>

        {/* Concern selector */}
        <section className="rounded-2xl bg-white p-8 shadow-sm text-base">
          <h2 className="text-2xl font-semibold text-slate-900">What do you want to work on?</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {[
              { key: "gut", label: "Gut & digestion" },
              { key: "women", label: "Women’s health" },
              { key: "skin", label: "Skin & acne" },
              { key: "oral", label: "Oral health" },
              { key: "general", label: "General wellbeing" },
            ].map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setConcern(opt.key as Concern)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                  concern === opt.key
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "bg-sky-100 text-slate-800 hover:bg-sky-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Practitioner list */}
          <div className="mt-6 grid gap-5 md:grid-cols-2 text-base">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-xs font-medium uppercase text-cyan-700">{p.role}</p>
                <p className="mt-2 text-base text-slate-700 text-justify">{p.summary}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Focus:{" "}
                  {p.focus
                    .map((f) =>
                      f === "gut"
                        ? "Gut"
                        : f === "women"
                        ? "Women’s health"
                        : f === "skin"
                        ? "Skin"
                        : f === "oral"
                        ? "Oral"
                        : "General"
                    )
                    .join(", ")}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Join waitlist / request consult
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Coming soon note */}
        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Coming soon</h2>
          <ul className="mt-3 grid gap-2 text-base text-slate-800 md:grid-cols-3">
            <li>• Secure video consults with microbiome-informed clinicians</li>
            <li>• Shared view of your BiomeAI report and VAMSScape logs</li>
            <li>• Follow-up plans synced with BiomeWell and BiomeMart</li>
          </ul>
        </section>
      </div>
    </main>
  );
}