/** @type {import('next').NextConfig} */
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  /*  output: "export", */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
