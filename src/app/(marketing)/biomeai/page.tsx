import Link from "next/link";

export default function BiomeAIPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
            BiomeAI · Insights Engine
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            From FASTQ files to readable microbiome insights.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            BiomeAI is the analysis and reporting layer that turns raw sequencing data into scores,
            narratives, and next steps.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Explore data integration
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Learn about our methods
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Planned analysis pipeline</h2>
            <p className="mt-4 text-slate-600">
              Phase 1 focuses on rule-based scoring and templated reports, with room to grow into more
              advanced models.
            </p>
            <ol className="mt-6 space-y-3 text-slate-600 list-decimal list-inside">
              <li>Secure FASTQ upload or lab-side integration.</li>
              <li>Quality control and basic taxonomic profiling.</li>
              <li>Rule-based interpretation against curated knowledge bases.</li>
              <li>Report generation and PDF export for patients and practitioners.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Built with Python and FastAPI</h2>
            <p className="mt-4 text-slate-600">
              The BiomeAI services are designed as Python microservices exposed via FastAPI, with clear
              contracts to the Next.js frontend.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
              <li>spaCy and domain-specific models for text and report generation.</li>
              <li>PostHog instrumentation to understand how reports are used in practice.</li>
              <li>Room for future ML-based risk models and personalization.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
