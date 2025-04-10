import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here 
  
     disable React’s Strict Mode since it is interfering with the CKEditor 5 React component in development mode.
  */

  // output: "export",
  pageExtensions: ["tsx", "ts"], // If you're using TypeScript
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@codemirror/state": require.resolve("@codemirror/state"),
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/ckfinder/:path*",
        destination: `https://iris-api-gateway-14west-new-iris-qa.apps.c9.aws.okd.14west.io/ckfinder/:path*`,
      },
    ];
  },
};

export default nextConfig;
