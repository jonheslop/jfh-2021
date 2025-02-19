const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imagedelivery.net", "bukk.it"],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/data/:match*",
        destination: "https://jonheslop.com/_vercel/insights/:match*",
      },
      {
        source: "/api/perf/:match*",
        destination: "https://jonheslop.com/_vercel/speed-insights/:match*",
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);
