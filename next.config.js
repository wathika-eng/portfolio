/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
    minimumCacheTTL: 600,
  },
  // Other Next.js config options can go here
};

module.exports = nextConfig;

// Add caching headers for static assets and image files served from this app
// This helps browsers and intermediate CDNs cache immutable assets.
module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        // Cache Next.js static files (JS/CSS) for a long time
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images in /public (if you add local images)
        source: "/:file*\\.(jpg|jpeg|png|svg|gif|webp|avif)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
