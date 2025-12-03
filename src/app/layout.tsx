import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const headingFont = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAMS BIOME",
  description: "Unified microbiome ecosystem: diagnostics, AI, products, and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {/* Header / main nav */}
        <Navbar />

        {/* Page content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="mt-8 border-t border-sky-900 bg-[#004E7C] pt-8 text-xs text-slate-100">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-4">
              {/* Brand + description */}
              <div className="space-y-2 md:pl-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-8 w-auto">
                    <Image
                      src="/images/logo-vams-biome-v2.png.png"
                      alt="VAMS BIOME logo"
                      width={140}
                      height={32}
                      className="h-8 w-auto object-contain"
                    />
                  </span>
                </div>
                <p className="text-xs text-sky-100/80">
                  Diagnostics, AI insights, and microbiome-first products designed for real-world care.
                </p>
              </div>

              {/* Explore */}
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                  Explore
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/well" className="hover:text-cyan-300">
                      Diagnostics (BiomeWell)
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai/report" className="hover:text-cyan-300">
                      AI Insights (BiomeAI)
                    </Link>
                  </li>
                  <li>
                    <Link href="/mart" className="hover:text-cyan-300">
                      Products (BiomeMart)
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="hover:text-cyan-300">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/science" className="hover:text-cyan-300">
                      The Science
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="hover:text-cyan-300">
                      My dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-cyan-300">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn */}
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                  Learn
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/blog" className="hover:text-cyan-300">
                      BiomeInsights Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-cyan-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-cyan-300">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="hover:text-cyan-300">
                      Partners / Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-cyan-300">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                  Legal
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-cyan-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-cyan-300">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="hover:text-cyan-300">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping-policy" className="hover:text-cyan-300">
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-protection" className="hover:text-cyan-300">
                      Data Protection (HIPAA / GDPR)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 border-t border-sky-800 pt-4 text-[11px] text-sky-100/80 md:flex-row md:items-center md:justify-between">
              <div>
                <p>
                  © {new Date().getFullYear()} VAMS BIOME. For informational use only; not a substitute for
                  professional medical advice, diagnosis, or treatment.
                </p>
                <p className="mt-1">
                  BiomeMart store experiences are powered by a self-hosted Medusa backend.
                </p>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <p>
                  Contact: <a href="mailto:support@vamsbiome.com" className="hover:text-cyan-300">support@vamsbiome.com</a>
                </p>
                <p>Phone: +91-XXX-XXX-XXXX · +61-XXX-XXX-XXX (regional support)</p>
                <p className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                    LinkedIn
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                    YouTube
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                    Twitter
                  </a>
                </p>
              </div>
            </div>

            {/* Global disclaimers */}
            <div className="mt-4 space-y-1 border-t border-sky-800 pt-3 text-[10px] leading-relaxed text-sky-100/80">
              <p>
                Information provided by VAMS BIOME is intended for general education and wellness support. It is
                not designed or approved to diagnose, treat, cure, or prevent any disease and should never replace
                guidance from your physician or other qualified healthcare provider.
              </p>
              <p>
                Any supplements, probiotics, or related products recommended alongside your results may be offered
                through separate subscriptions or purchases and are not included in the price of diagnostic kits
                unless explicitly stated.
              </p>
              <p>
                Where individual formulations or partner technologies are referenced (for example, improvements in
                specific markers in early studies), these represent limited data and may not predict your personal
                outcome.
              </p>
              <p className="mt-1">
                *These statements have not been evaluated by the Food and Drug Administration. VAMS BIOME products
                are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}