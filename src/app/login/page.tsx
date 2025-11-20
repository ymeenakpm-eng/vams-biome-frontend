"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-md px-4">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Sign in to VAMS BIOME</h1>
          <p className="mt-2 text-sm text-slate-700">
            This is a placeholder login. In a future phase we&apos;ll connect it to Supabase/Auth0.
          </p>

          <form className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-800">
                Email
                <input
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800">
                Password
                <input
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  type="password"
                  placeholder="••••••••"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Sign in (demo)
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-600">
            For now this form does not authenticate. Use the navigation to explore the ecosystem:
            BiomeWell, BiomeAI, BiomeMart, VAMSScape, and VAMSConnect.
          </p>

          <p className="mt-3 text-xs text-slate-600">
            New here?{" "}
            <Link href="/contact" className="font-semibold text-cyan-700 hover:text-cyan-800">
              Contact us to join the pilot →
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}