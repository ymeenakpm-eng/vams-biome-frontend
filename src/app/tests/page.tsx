import Link from "next/link";
import Image from "next/image";

const tests = [
  {
    id: "gut",
    label: "GutX",
    name: "Gut Microbiome Test",
    badge: "GUT Test",
    color: "from-sky-500 to-emerald-500",
    details: "Stool sample – best for digestion, bloating, weight, skin, and metabolism.",
    cta: "Explore Gut Tests",
    image: "/test/test-kit.png",
  },
  {
    id: "vaginal",
    label: "VagiX",
    name: "Vaginal Microbiome Test (VAGI-HER)",
    badge: "VAGINAL Test",
    color: "from-pink-500 to-rose-500",
    details: "Vaginal swab – best for BV, pH balance, fertility, and menopause.",
    cta: "Explore Vaginal Tests",
    image: "/images/hero-galaxy10.jpg",
  },
  {
    id: "oral",
    label: "OralX",
    name: "Oral Microbiome Test",
    badge: "ORAL Test",
    color: "from-indigo-500 to-sky-500",
    details: "Oral swab – best for gum health, bad breath, and the oral–gut axis.",
    cta: "Explore Oral Tests",
    image: "/images/hero-galaxy11.jpg",
  },
  {
    id: "skin",
    label: "SkinX",
    name: "Skin Microbiome Test",
    badge: "SKIN Test",
    color: "from-amber-500 to-orange-500",
    details: "Skin swab – best for acne, barrier function, and fungal balance.",
    cta: "Explore Skin Tests",
    image: "/images/hero-galaxy12.jpg",
  },
];

export default function TestsHubPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <header className="mb-10 max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-emerald-600">
            BiomeWell diagnostics
          </p>
          <h1 className="mt-2 text-6xl font-semibold text-slate-900">
            Choose your microbiome test
          </h1>
          <p className="mt-3 text-2xl text-slate-600">
            Start with the system that matters most right now—gut, vaginal, oral, or skin. You can
            always add more tests and insight packs later from your dashboard.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <article
              key={test.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md"
            >
              <div>
                <div className="relative mb-5 h-60 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={test.image}
                    alt={test.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-slate-700">
                  {test.badge}
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">{test.name}</h2>
                <p className="mt-2 text-lg text-slate-600">{test.details}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div
                  className={`inline-flex items-center rounded-full bg-gradient-to-r ${test.color} px-4 py-1.5 text-sm font-semibold text-white`}
                >
                  <span>{test.label}</span>
                </div>
              </div>

              <Link
                href={`/tests/${test.id}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-black px-5 py-3 text-base font-semibold text-white hover:bg-slate-900"
              >
                Shop Now
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
