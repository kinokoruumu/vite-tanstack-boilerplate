/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "clsx"],
  importOrder: ["^(react/(.*)$)|^(react$)", "", "<THIRD_PARTY_MODULES>", "", "^ui/(.*)$", "", "^types$", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
