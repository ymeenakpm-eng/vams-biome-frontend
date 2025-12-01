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

    // Create customer
    const createRes = await fetch(`${base}/store/customers`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-publishable-api-key": publishableKey,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    })

    const createText = await createRes.text()
    if (!createRes.ok) {
      return new NextResponse(createText, {
        status: createRes.status,
        headers: {
          "content-type":
            createRes.headers.get("content-type") || "application/json",
        },
      })
    }

    // Best-effort auto-login: do not fail registration if this part breaks.
    if (body?.email && body?.password) {
      try {
        const loginRes = await fetch(`${base}/store/auth`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-publishable-api-key": publishableKey,
          },
          body: JSON.stringify({ email: body.email, password: body.password }),
          cache: "no-store",
        })

        // If login succeeds, forward its response + cookie.
        if (loginRes.ok) {
          const out = new NextResponse(await loginRes.text(), {
            status: loginRes.status,
            headers: {
              "content-type":
                loginRes.headers.get("content-type") || "application/json",
            },
          })
          const setCookie = loginRes.headers.get("set-cookie")
          if (setCookie) out.headers.set("set-cookie", setCookie)
          return out
        }
      } catch {
        // Ignore auto-login errors; fall through to success response.
      }
    }

    // Customer was created; let frontend redirect user to /login.
    return new NextResponse(createText || "{}", {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || String(e) }, {
      status: 500,
    })
  }
}
