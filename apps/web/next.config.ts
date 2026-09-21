import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const config: NextConfig = {
  typedRoutes: true,
  output: "export",
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};
export default createMDX({
  options: { remarkPlugins: ["remark-gfm"], rehypePlugins: ["rehype-slug"] },
})(config);
