"use client";

export default function MedicalDisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        <header className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Legal</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Medical disclaimer</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            This page consolidates the informational disclaimers used across the VAMS BIOME experience.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm text-base text-slate-700 space-y-4">
          <p className="text-justify">
            Information provided by VAMS BIOME is intended for general education and wellness support. It is not
            designed or approved to diagnose, treat, cure, or prevent any disease and should never replace guidance
            from your physician or other qualified healthcare provider.
          </p>
          <p className="text-justify">
            Always seek the advice of a physician or other qualified health provider with any questions you may have
            regarding a medical condition. Never disregard professional medical advice or delay seeking it because of
            something you have read on this website.
          </p>
          <p className="text-justify">
            Where supplements, probiotics, or related products are referenced, they may be offered through separate
            purchases and are not included unless explicitly stated.
          </p>
          <p className="text-justify">
            *These statements have not been evaluated by the Food and Drug Administration. VAMS BIOME products are not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>
      </div>
    </main>
  );
}
