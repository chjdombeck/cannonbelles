/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Keep the old static-site addresses working (they've already been shared).
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/coffee.html", destination: "/coffee", permanent: true },
      { source: "/cheese.html", destination: "/cheese", permanent: true },
      { source: "/story.html", destination: "/story", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
