import Link from "next/link";

export default function BiomeWellPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
            BiomeWell · Diagnostics
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            At-home microbiome diagnostics, designed for real-world care.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            BiomeWell makes it simple to order kits, register samples, and interpret microbiome reports
            with clear, clinically-aware language.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Talk to us about BiomeWell
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Read our diagnostics insights
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">End-to-end kit workflow</h2>
            <p className="mt-4 text-slate-600">
              From ordering to results, BiomeWell provides a guided experience that reduces friction for
              patients and support teams.
            </p>
            <ol className="mt-6 space-y-3 text-slate-600 list-decimal list-inside">
              <li>Patients order or receive a kit with clear, friendly instructions.</li>
              <li>Sample registration and metadata capture via secure web or mobile UI.</li>
              <li>Laboratory processing and QC status surfaced in the dashboard.</li>
              <li>Reports generated through BiomeAI and delivered back into the same experience.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Reporting that bridges science and care</h2>
            <p className="mt-4 text-slate-600">
              Reports focus on clarity and actionability, with layered detail for clinicians and
              scientifically curious users.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
              <li>Health scores and key findings summarized in plain language.</li>
              <li>Backed by referenced literature and transparent methods.</li>
              <li>Designed to plug into future care pathways and BiomeMart protocols.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
