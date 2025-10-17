// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat helps convert old "extends" configs to flat config
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'plugin:prettier/recommended'

  ),
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/build/**", "**/out/**", "**/next-env.d.ts"],
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
