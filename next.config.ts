import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const legacy = [
      { source: "/partners", destination: "/download" },
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
