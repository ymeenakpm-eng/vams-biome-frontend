import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
                </ul>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-sky-100/70">
              © {new Date().getFullYear()} VAMS BIOME. For informational use only; not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-1 text-[11px] text-sky-100/70">
              BiomeMart store experiences are powered by a self-hosted Medusa backend.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}