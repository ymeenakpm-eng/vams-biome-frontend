"use client";

export default function DataProtectionPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-base text-slate-700">
        <h1 className="mb-1 text-4xl font-bold text-slate-900">Data Protection (HIPAA / GDPR)</h1>
        <p className="mb-4 text-sm text-slate-500">Last updated: 2 December 2025</p>
        <p className="mb-4 text-slate-600 text-justify">
          This page explains, at a high level, how VAMS BIOME aims to handle sensitive health
          and microbiome data in line with common privacy and security principles drawn from
          HIPAA and GDPR. This is a non-final overview and does not replace formal legal
          agreements or local regulatory requirements.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">1. Types of data we handle</h2>
        <p className="mb-3 text-justify">
          Our services may process personal information (such as contact details and account
          information), health-related information (such as symptoms and lifestyle inputs),
          and microbiome test data (such as sample identifiers and sequencing-derived
          insights). Where possible, data used for research and product improvement is
          de-identified or aggregated.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">2. Legal basis & consents</h2>
        <p className="mb-3 text-justify">
          In jurisdictions following GDPR, we generally rely on your explicit consent to
          process health data, and on legitimate interests or contractual necessity for
          operating the service (for example, fulfilling a test order). You may withdraw
          consent for certain uses at any time, subject to legal or contractual limits.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">3. Safeguards & security</h2>
        <p className="mb-3 text-justify">
          We aim to implement administrative, technical, and physical safeguards to protect
          your information, such as access controls, encryption where appropriate, and
          secure handling of biological samples. No system is perfectly secure, but we
          strive to follow industry best practices and applicable regulatory guidance.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">4. Data subject rights</h2>
        <p className="mb-3 text-justify">
          Depending on your jurisdiction, you may have rights to access, correct, delete,
          or restrict processing of your personal data, and to request a copy of certain
          information in a portable format. We will provide instructions in your account
          dashboard or via support on how to exercise these rights where they apply.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-semibold text-slate-900">5. Contact & questions</h2>
        <p className="mb-6 text-justify">
          If you have questions about how your data is handled, or want to exercise a
          privacy right available in your region, please contact us at
          <span className="font-medium"> privacy@vamsbiome.com</span>. For formal HIPAA
          or GDPR commitments, please refer to the detailed agreements shared with
          partners, clinicians, or enterprise customers.
        </p>
      </div>
    </main>
  );
}
