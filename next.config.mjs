/** @type {import('next').NextConfig} */
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  assetPrefix: process.env.URL ? process.env.URL : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
