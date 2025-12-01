import { NextResponse } from "next/server"

function env() {
  const base = process.env.MEDUSA_BACKEND_URL
  if (!base) throw new Error("MEDUSA_BACKEND_URL missing")
  const publishableKey = process.env.MEDUSA_PUBLISHABLE_KEY
  if (!publishableKey) throw new Error("MEDUSA_PUBLISHABLE_KEY missing")
  return { base, publishableKey }
}

export async function POST(req: Request) {
  try {
    const { base, publishableKey } = env()
    const body = await req.json().catch(() => ({}))
    const res = await fetch(`${base}/store/auth`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-publishable-api-key": publishableKey,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    })

    const text = await res.text()
    const out = new NextResponse(text, { status: res.status, headers: { "content-type": res.headers.get("content-type") || "application/json" } })
    const setCookie = res.headers.get("set-cookie")
    if (setCookie) out.headers.set("set-cookie", setCookie)
    return out
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || String(e) }, { status: 500 })
  }
}
