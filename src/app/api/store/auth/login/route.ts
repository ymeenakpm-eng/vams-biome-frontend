import { NextResponse } from "next/server"

function env() {
  const base = process.env.MEDUSA_BACKEND_URL
  if (!base) throw new Error("MEDUSA_BACKEND_URL missing")
  return { base }
}

export async function POST(req: Request) {
  try {
    const { base } = env()
    const body = await req.json().catch(() => ({}))
    const res = await fetch(`${base}/store/auth`, {
      method: "POST",
      headers: { "content-type": "application/json" },
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
