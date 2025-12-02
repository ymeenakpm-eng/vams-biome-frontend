"use client";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Partners &amp; Affiliates
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Grow with the VAMS BIOME affiliate program
          </h1>
          <p className="mt-4 text-base text-slate-700 text-justify">
            Whether you&apos;re a creator, clinician, coach, or community leader, you can earn rewards by
            introducing your audience to microbiome testing and science-backed probiotics.
          </p>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2 text-base">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">Program benefits</h2>
            <ul className="space-y-1 text-base text-slate-700">
              <li>• 10% commission on eligible kit and product purchases.</li>
              <li>• Free kit credit for every 5 referred purchases (once live).</li>
              <li>• Early access to new diagnostics and BiomeMart launches.</li>
              <li>• Co-branded content and education resources.</li>
            </ul>
          </article>
          <article className="rounded-2xl bg-emerald-900 p-8 text-emerald-50">
            <h2 className="mb-3 text-2xl font-semibold">Who it&apos;s for</h2>
            <ul className="space-y-1 text-base">
              <li>• Health creators and educators.</li>
              <li>• Clinicians and telehealth providers.</li>
              <li>• Nutritionists, coaches, and community programs.</li>
            </ul>
          </article>
        </section>

        <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm text-base">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">How it works</h2>
          <ol className="list-decimal space-y-2 pl-5 text-base text-slate-700">
            <li>Apply to the program and tell us about your audience.</li>
            <li>Receive your unique referral link and starter resources.</li>
            <li>Share content and offers with your community.</li>
            <li>Track referrals and earnings in the partner dashboard (coming soon).</li>
          </ol>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base text-slate-800">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">Ready to partner?</h2>
          <p className="text-justify">
            During the pilot phase, affiliate onboarding will be handled manually. Please reach out to
            <a href="mailto:support@vamsbiome.com" className="font-semibold text-cyan-700 hover:text-cyan-800">
              {" "}
              support@vamsbiome.com
            </a>{" "}
            with a short note about your work and audience size.
          </p>
          <p className="mt-3 text-xs text-slate-600 text-justify">
            In later phases, this page can connect to an automated referral platform and partner portal.
          </p>
        </section>
      </div>
    </main>
  );
}
