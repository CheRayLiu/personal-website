const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
};

module.exports = withNextra(nextConfig);
