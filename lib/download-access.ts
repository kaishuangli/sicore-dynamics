export const DOWNLOAD_ACCESS_KEY = "sicore-download-access";

export type DownloadRegistration = {
  name: string;
  company: string;
  email: string;
  phone: string;
  registeredAt: string;
};

export function readDownloadAccess(): DownloadRegistration | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(DOWNLOAD_ACCESS_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw) as Partial<DownloadRegistration>;
    if (!data.name || !data.company || !data.email || !data.phone) return null;

    return {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      registeredAt: data.registeredAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveDownloadAccess(registration: Omit<DownloadRegistration, "registeredAt">) {
  const payload: DownloadRegistration = {
    ...registration,
    registeredAt: new Date().toISOString(),
  };
  window.localStorage.setItem(DOWNLOAD_ACCESS_KEY, JSON.stringify(payload));
  return payload;
}
