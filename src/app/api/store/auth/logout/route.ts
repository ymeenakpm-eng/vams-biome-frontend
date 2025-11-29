import { NextResponse } from "next/server"

function env() {
  const base = process.env.MEDUSA_BACKEND_URL
  if (!base) throw new Error("MEDUSA_BACKEND_URL missing")
  return { base }
}

export async function POST() {
  try {
    const { base } = env()
    const res = await fetch(`${base}/store/auth`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      cache: "no-store",
      // Medusa uses cookie-based store auth; the cookie is forwarded by Next automatically when calling same-origin from server?
    })
    const out = new NextResponse(await res.text(), { status: res.status, headers: { "content-type": res.headers.get("content-type") || "application/json" } })
    const setCookie = res.headers.get("set-cookie")
    if (setCookie) out.headers.set("set-cookie", setCookie)
    return out
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || String(e) }, { status: 500 })
  }
}
