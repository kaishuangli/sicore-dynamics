import path from "node:path";
import type { NextConfig } from "next";
import { refreshFolderImageManifestIfNeeded } from "./lib/catalog/folder-images";

refreshFolderImageManifestIfNeeded();

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  // Parent folder has extra lockfiles and old Next apps. Pin Turbopack here
  // so it does not watch C:\kaishuangLi\Website and 404 nested routes.
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.1.170"],
  async redirects() {
    const legacy = [
      { source: "/partners", destination: "/download" },
      { source: "/products/fast-charging-product", destination: "/products/ev-charging-gun" },
      {
        source: "/products/fast-charging-product/:path*",
        destination: "/products/ev-charging-gun/:path*",
      },
      { source: "/solutions/agv-amr", destination: "/solutions/unmanned-aerial-vehicles" },
      { source: "/solutions/industrial-iot", destination: "/solutions/agricultural-automation" },
      {
        source: "/solutions/agricultural-robotics",
        destination: "/solutions/agricultural-automation",
      },
      {
        source: "/technology/wireless-power",
        destination: "/technology/wireless-energy-platform",
      },
      {
        source: "/technology/wireless-charging",
        destination: "/technology/wireless-energy-platform",
      },
    ] as const;

    return legacy.flatMap((rule) => [
      { source: rule.source, destination: rule.destination, permanent: true },
      {
        source: `/zh${rule.source}`,
        destination: `/zh${rule.destination}`,
        permanent: true,
      },
      {
        source: `/es${rule.source}`,
        destination: `/es${rule.destination}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
