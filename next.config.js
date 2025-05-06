/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'i.imgur.com',
			'images.unsplash.com', // Example of additional domains
		],
		// Optional: Configure device sizes for responsive images
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		// Optional: Configure image formats
		formats: ['image/webp'],
		// Optional: Configure minimum cache TTL
		minimumCacheTTL: 60,
	},
	// Other Next.js config options can go here
};

module.exports = nextConfig;
