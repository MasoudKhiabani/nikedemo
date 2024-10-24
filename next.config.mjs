/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Adjust the base path and asset prefix for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/Nikegithubpages" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Nikegithubpages/" : "",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
