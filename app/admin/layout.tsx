import type { ReactNode } from "react";
import { refreshFolderImageManifestIfNeeded } from "@/lib/catalog/folder-images";

export default function AdminLayout({ children }: { children: ReactNode }) {
  refreshFolderImageManifestIfNeeded();
  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#0B0F19]">
      {children}
    </div>
  );
}
