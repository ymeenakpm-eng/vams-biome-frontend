import Link from "next/link";

const faqs = [
  {
    question: "What is VAMS BIOME?",
    answer:
      "VAMS BIOME combines microbiome diagnostics, AI-driven interpretation, and microbiome-first products to support personalised gut and whole-body health.",
  },
  {
    question: "How does the gut test / BiomeWell kit work?",
    answer:
      "You collect a small sample at home using the kit instructions and send it to our partner lab. The sample is processed using sequencing and bioinformatics pipelines, and your results are translated into scores, panels, and insights in the BiomeAI layer.",
  },
  {
    question: "Is this a medical diagnostic test?",
    answer:
      "Unless explicitly stated, VAMS BIOME tests are intended for wellness and research use. They are not designed or approved to diagnose, treat, cure, or prevent any disease and should not replace advice from your physician.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We follow strict data protection practices and aim to align with HIPAA / GDPR-style safeguards where applicable. Identifiable information is separated from raw data, and access is limited to authorised team members and partners.",
  },
  {
    question: "How do the cart and checkout work?",
    answer:
      "The BiomeMart cart is powered by a Medusa-based store backend. When you add items, a secure cart is created. At checkout you share contact and delivery details, and a member of our team can follow up to confirm payment and fulfilment.",
  },
  {
    question: "Can I change or cancel an order?",
    answer:
      "Order changes and cancellations depend on the current fulfilment status. Please reach out to our support team with your order details as soon as possible, and we will try to accommodate your request.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via the Contact page, or by emailing support@vamsbiome.com. For urgent questions about active orders, please include your order ID and the email used at checkout.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h1 className="text-4xl font-semibold text-slate-900">Frequently asked questions</h1>
        <p className="mt-3 text-base text-slate-600">
          Answers to common questions about VAMS BIOME diagnostics, AI insights, and the BiomeMart
          experience. This content is for general information and should not replace medical advice.
        </p>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
          {faqs.map((item) => (
            <section key={item.question} className="px-6 py-5">
              <h2 className="text-lg font-semibold text-slate-900">{item.question}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
            </section>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Can&apos;t find what you&apos;re looking for? Visit our <Link href="/contact" className="text-emerald-700 hover:text-emerald-800">Contact</Link> page or email
          <a href="mailto:support@vamsbiome.com" className="ml-1 text-emerald-700 hover:text-emerald-800">support@vamsbiome.com</a>.
        </p>
      </div>
    </main>
  );
}
