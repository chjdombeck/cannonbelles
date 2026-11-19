/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Allow optimizing gift box photos from this store's Shopify file folder only (no open image proxy).
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/s/files/1/0828/0545/7116/**" },
    ],
  },
  // Keep the old static-site addresses working (they've already been shared).
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/coffee.html", destination: "/coffee", permanent: true },
      { source: "/cheese.html", destination: "/cheese", permanent: true },
      { source: "/story.html", destination: "/story", permanent: true },

      // Old WordPress cannonbelles.com addresses (from its sitemap), so Google results and bookmarks keep working.
      { source: "/our-story", destination: "/story", permanent: true },
      { source: "/where-to-buy", destination: "/cheese#stores", permanent: true },
      { source: "/locally-sourced-products", destination: "/cheese#process", permanent: true },
      { source: "/coffee-2", destination: "/coffee", permanent: true },
      { source: "/coffee-menu", destination: "/menu", permanent: true },
      { source: "/ice-cream-menu", destination: "/menu", permanent: true },
      { source: "/lunch", destination: "/menu", permanent: true },
      { source: "/takeout", destination: "/menu", permanent: true },
      { source: "/contact", destination: "/#visit", permanent: true },
      { source: "/order", destination: "/cheese", permanent: true },
      { source: "/order-2", destination: "/cheese", permanent: true },
      { source: "/my-account", destination: "/cheese", permanent: true },
      { source: "/product/:slug*", destination: "/cheese#selection", permanent: true },
      { source: "/product-category/:slug*", destination: "/cheese#selection", permanent: true },
      { source: "/recipes/:slug*", destination: "/cheese", permanent: true },
      { source: "/recipes", destination: "/cheese", permanent: true },
      { source: "/events", destination: "/", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/our-blog", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/header", destination: "/", permanent: true },
      { source: "/footer", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/", permanent: true },
      { source: "/2021/:slug*", destination: "/", permanent: true },
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
