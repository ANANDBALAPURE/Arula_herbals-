/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    // Lint separately via `npm run lint`; don't let lint warnings block `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
