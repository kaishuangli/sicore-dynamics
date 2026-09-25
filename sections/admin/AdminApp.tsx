"use client";

import { useEffect, useMemo, useState } from "react";
import type { CatalogDefinition, CatalogId, CatalogProduct, LocalizedText } from "@/lib/catalog/types";

type View = "list" | "form";

const emptyText = (): LocalizedText => ({ en: "", zh: "", es: "" });

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function blankProduct(catalogId: CatalogId, subcategoryId: string): CatalogProduct {
  const buyable = catalogId === "third-party-products";
  return {
    id: "",
    catalogId,
    subcategoryId,
    brand: catalogId === "third-party-products" ? "Partner Brand" : "SiCore Dynamics",
    name: emptyText(),
    tagline: emptyText(),
    description: emptyText(),
    image: "",
    imageAlt: emptyText(),
    availability: "available",
    priceLabel: buyable ? "" : "Quote",
    priceCents: buyable ? 0 : undefined,
    buyable,
    specs: [
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
    ],
    published: true,
    createdAt: "",
    updatedAt: "",
  };
}

export default function AdminApp({ initialAuthenticated }: { initialAuthenticated: boolean }) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState("");
  const [catalogs, setCatalogs] = useState<CatalogDefinition[]>([]);
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [catalogId, setCatalogId] = useState<CatalogId>("wireless-power-modules");
  const [view, setView] = useState<View>("list");
  const [draft, setDraft] = useState<CatalogProduct | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);

  const catalog = catalogs.find((item) => item.id === catalogId) ?? catalogs[0];
  const filtered = useMemo(
    () => products.filter((item) => item.catalogId === catalogId),
    [products, catalogId],
  );

  async function load() {
    const response = await fetch("/api/admin/products");
    if (!response.ok) {
      setAuthenticated(false);
      return;
    }
    const data = (await response.json()) as { catalogs: CatalogDefinition[]; products: CatalogProduct[] };
    setCatalogs(data.catalogs);
    setProducts(data.products);
    if (!data.catalogs.some((item) => item.id === catalogId) && data.catalogs[0]) {
      setCatalogId(data.catalogs[0].id);
    }
  }

  useEffect(() => {
    if (authenticated) void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Login failed.");
      return;
    }
    setPassword("");
    setAuthenticated(true);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setProducts([]);
    setView("list");
  }

  function startCreate() {
    if (!catalog) return;
    setEditingId(null);
    setDraft(blankProduct(catalog.id, catalog.subcategories[0]?.id ?? ""));
    setView("form");
    setStatus("");
    setError("");
  }

  function startEdit(product: CatalogProduct) {
    setEditingId(product.id);
    setDraft({
      ...product,
      specs: product.specs.length ? product.specs : blankProduct(product.catalogId, product.subcategoryId).specs,
    });
    setView("form");
    setStatus("");
    setError("");
  }

  async function uploadImage(file: File) {
    if (!draft) return;
    setUploading(true);
    setError("");
    const form = new FormData();
    form.set("file", file);
    form.set("productId", draft.id || slugify(draft.name.en) || "product");
    form.set("catalogId", draft.catalogId);
    const response = await fetch("/api/admin/upload", { method: "POST", body: form });
    const data = (await response.json().catch(() => null)) as { image?: string; error?: string } | null;
    setUploading(false);
    if (!response.ok || !data?.image) {
      setError(data?.error || "Image upload failed.");
      return;
    }
    setDraft({ ...draft, image: data.image, imageAlt: { ...draft.imageAlt, en: draft.imageAlt.en || draft.name.en } });
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!draft) return;
    setBusy(true);
    setError("");
    const id = draft.id.trim() || slugify(draft.name.en);
    const payload = {
      ...draft,
      id,
      specs: draft.specs.filter((row) => row.label.trim() && row.value.trim()),
      priceCents: draft.priceCents && draft.priceCents > 0 ? draft.priceCents : undefined,
      priceLabel:
        draft.priceLabel.trim() ||
        (draft.priceCents && draft.priceCents > 0 ? "" : "Quote"),
    };

    const response = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => null)) as { product?: CatalogProduct; error?: string } | null;
    setBusy(false);
    if (!response.ok || !data?.product) {
      setError(data?.error || "Could not save product.");
      return;
    }
    setStatus("Saved. Refresh the public catalog to see it. Commit the JSON and image files before deploying.");
    setView("list");
    setDraft(null);
    await load();
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this uploaded product?")) return;
    const response = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Could not delete product.");
      return;
    }
    await load();
  }

  if (!authenticated) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">SiCore Dynamics</p>
        <h1 className="mt-2 font-display text-3xl font-black tracking-tight">Product upload</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Add SKUs under Products and Third Party Products. Files are written into this repo for git deploy.
        </p>
        <form onSubmit={login} className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-semibold">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              autoFocus
            />
          </label>
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-[#0B5FFF] px-4 py-2.5 text-sm font-bold text-white disabled:opacity-60"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
          <p className="text-xs leading-5 text-slate-500">
            Local default password is <code>sicore-admin</code>. Production needs{" "}
            <code>CATALOG_ADMIN_PASSWORD</code>.
          </p>
        </form>
      </main>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">SiCore Dynamics</p>
            <h1 className="font-display text-xl font-black">Product upload</h1>
          </div>
          <button type="button" onClick={logout} className="text-sm font-bold text-slate-600 hover:text-[#0B5FFF]">
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-3">
          <p className="px-2 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Catalogs</p>
          <ul className="space-y-1">
            {catalogs.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    setCatalogId(item.id);
                    setView("list");
                    setDraft(null);
                    setStatus("");
                    setError("");
                  }}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${
                    catalogId === item.id ? "bg-[#EFF6FF] text-[#0B5FFF]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label.en}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          {error ? <p className="mb-4 text-sm text-rose-600">{error}</p> : null}
          {status ? <p className="mb-4 text-sm text-emerald-700">{status}</p> : null}

          {view === "list" ? (
            <>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-black">{catalog?.label.en}</h2>
                  <p className="mt-1 text-sm text-slate-500">{filtered.length} uploaded product(s)</p>
                </div>
                <button
                  type="button"
                  onClick={startCreate}
                  className="bg-[#0B5FFF] px-4 py-2.5 text-sm font-bold text-white"
                >
                  Upload product
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Built-in pages stay in code. This list is only products added through this tool. After saving, commit{" "}
                <code>content/catalog/products.json</code> and <code>public/images/catalog/</code>.
              </p>
              {filtered.length === 0 ? (
                <p className="mt-10 rounded-lg border border-dashed border-slate-300 px-4 py-16 text-center text-sm text-slate-500">
                  No uploaded products in this catalog yet.
                </p>
              ) : (
                <ul className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
                  {filtered.map((item) => (
                    <li key={item.id} className="flex flex-wrap items-center gap-4 py-4">
                      <div className="h-16 w-16 overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.image} alt="" className="h-full w-full object-contain" />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold">{item.name.en}</p>
                        <p className="text-xs text-slate-500">
                          {item.subcategoryId} · {item.id}
                          {item.buyable ? " · buyable" : ""}
                          {item.published ? "" : " · hidden"}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="rounded border border-slate-300 px-3 py-1.5 text-xs font-bold"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => void remove(item.id)}
                          className="rounded border border-rose-200 px-3 py-1.5 text-xs font-bold text-rose-600"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : draft && catalog ? (
            <ProductForm
              catalog={catalog}
              draft={draft}
              editing={Boolean(editingId)}
              busy={busy}
              uploading={uploading}
              onChange={setDraft}
              onCancel={() => {
                setView("list");
                setDraft(null);
              }}
              onUpload={(file) => void uploadImage(file)}
              onSubmit={(event) => void save(event)}
            />
          ) : null}
        </section>
      </div>
    </div>
  );
}

function ProductForm({
  catalog,
  draft,
  editing,
  busy,
  uploading,
  onChange,
  onCancel,
  onUpload,
  onSubmit,
}: {
  catalog: CatalogDefinition;
  draft: CatalogProduct;
  editing: boolean;
  busy: boolean;
  uploading: boolean;
  onChange: (next: CatalogProduct) => void;
  onCancel: () => void;
  onUpload: (file: File) => void;
  onSubmit: (event: React.FormEvent) => void;
}) {
  function patch(partial: Partial<CatalogProduct>) {
    onChange({ ...draft, ...partial });
  }

  function patchText(key: "name" | "tagline" | "description" | "imageAlt", locale: keyof LocalizedText, value: string) {
    patch({ [key]: { ...draft[key], [locale]: value } });
  }

  const dollarValue = draft.priceCents == null ? "" : (draft.priceCents / 100).toFixed(2);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl font-black">{editing ? "Edit product" : "Upload product"}</h2>
        <button type="button" onClick={onCancel} className="text-sm font-bold text-slate-600">
          Back
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold">
          Subcategory
          <select
            value={draft.subcategoryId}
            onChange={(event) => patch({ subcategoryId: event.target.value })}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
            required
          >
            {catalog.subcategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label.en}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Slug / SKU id
          <input
            value={draft.id}
            onChange={(event) => patch({ id: event.target.value })}
            placeholder="auto from English name"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
            disabled={editing}
          />
        </label>
        <label className="text-sm font-semibold">
          Brand
          <input
            value={draft.brand}
            onChange={(event) => patch({ brand: event.target.value })}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
          />
        </label>
        <label className="text-sm font-semibold">
          Availability
          <select
            value={draft.availability}
            onChange={(event) => patch({ availability: event.target.value as CatalogProduct["availability"] })}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
          >
            <option value="in-stock">In stock</option>
            <option value="available">Available</option>
            <option value="oem">OEM</option>
          </select>
        </label>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-bold">Name</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {(["en", "zh", "es"] as const).map((locale) => (
            <input
              key={locale}
              required={locale === "en"}
              placeholder={locale.toUpperCase()}
              value={draft.name[locale]}
              onChange={(event) => patchText("name", locale, event.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-bold">Tagline</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {(["en", "zh", "es"] as const).map((locale) => (
            <input
              key={locale}
              placeholder={locale.toUpperCase()}
              value={draft.tagline[locale]}
              onChange={(event) => patchText("tagline", locale, event.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-bold">Description</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {(["en", "zh", "es"] as const).map((locale) => (
            <textarea
              key={locale}
              placeholder={locale.toUpperCase()}
              value={draft.description[locale]}
              onChange={(event) => patchText("description", locale, event.target.value)}
              rows={5}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-[160px_minmax(0,1fr)]">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-slate-50">
          {draft.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={draft.image} alt="" className="h-full w-full object-contain p-2" />
          ) : (
            <span className="text-xs text-slate-400">No image</span>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold">
            Product image
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="mt-2 block w-full text-sm"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) onUpload(file);
              }}
            />
          </label>
          <p className="mt-2 text-xs text-slate-500">{uploading ? "Uploading…" : "JPG / PNG / WEBP, up to 8MB."}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-semibold">
          Price label
          <input
            value={draft.priceLabel}
            onChange={(event) => patch({ priceLabel: event.target.value })}
            placeholder="Quote"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-semibold">
          Price (USD)
          <input
            type="number"
            min={0}
            step="0.01"
            value={dollarValue}
            onChange={(event) => {
              const dollars = Number(event.target.value);
              patch({
                priceCents: Number.isFinite(dollars) ? Math.round(dollars * 100) : 0,
                priceLabel: Number.isFinite(dollars) && dollars > 0 ? "" : draft.priceLabel || "Quote",
              });
            }}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="flex items-center gap-2 pt-7 text-sm font-semibold">
          <input
            type="checkbox"
            checked={draft.buyable}
            onChange={(event) => patch({ buyable: event.target.checked })}
          />
          Add to cart (online order)
        </label>
      </div>

      <label className="flex items-center gap-2 text-sm font-semibold">
        <input
          type="checkbox"
          checked={draft.published}
          onChange={(event) => patch({ published: event.target.checked })}
        />
        Published on the website
      </label>

      <div>
        <p className="text-sm font-bold">Specs</p>
        <div className="mt-3 space-y-2">
          {draft.specs.map((row, index) => (
            <div key={index} className="grid gap-2 md:grid-cols-2">
              <input
                placeholder="Label"
                value={row.label}
                onChange={(event) => {
                  const specs = draft.specs.map((item, i) =>
                    i === index ? { ...item, label: event.target.value } : item,
                  );
                  patch({ specs });
                }}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                placeholder="Value"
                value={row.value}
                onChange={(event) => {
                  const specs = draft.specs.map((item, i) =>
                    i === index ? { ...item, value: event.target.value } : item,
                  );
                  patch({ specs });
                }}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => patch({ specs: [...draft.specs, { label: "", value: "" }] })}
            className="text-xs font-bold text-[#0B5FFF]"
          >
            + Add spec
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={busy || uploading}
          className="bg-[#0B5FFF] px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60"
        >
          {busy ? "Saving…" : "Save product"}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2.5 text-sm font-bold text-slate-600">
          Cancel
        </button>
      </div>
    </form>
  );
}
