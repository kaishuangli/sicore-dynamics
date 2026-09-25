import { NextResponse } from "next/server";
import { adminPassword, isAdminAuthenticated, setAdminSession } from "@/lib/catalog/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim() ?? "";
  const expected = adminPassword();

  if (!expected) {
    return NextResponse.json(
      { error: "Set CATALOG_ADMIN_PASSWORD before using the admin in production." },
      { status: 500 },
    );
  }

  if (!password || password !== expected) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ authenticated: await isAdminAuthenticated() });
}
