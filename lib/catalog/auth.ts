import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "sicore_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

function secret() {
  return process.env.CATALOG_ADMIN_SECRET || process.env.CATALOG_ADMIN_PASSWORD || "sicore-catalog-local-secret";
}

export function adminPassword() {
  if (process.env.CATALOG_ADMIN_PASSWORD) return process.env.CATALOG_ADMIN_PASSWORD;
  if (process.env.NODE_ENV !== "production") return "sicore-admin";
  return "";
}

function tokenFor(password: string) {
  return createHmac("sha256", secret()).update(password).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function isAdminAuthenticated() {
  const expected = adminPassword();
  if (!expected) return false;
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return safeEqual(token, tokenFor(expected));
}

export async function setAdminSession() {
  const expected = adminPassword();
  if (!expected) throw new Error("Admin password is not configured.");
  const jar = await cookies();
  jar.set(COOKIE_NAME, tokenFor(expected), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.set(COOKIE_NAME, "", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 0 });
}

export function newProductId(name: string) {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return base || `product-${randomBytes(3).toString("hex")}`;
}
