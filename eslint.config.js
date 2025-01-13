import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest", // Changed from 2022 to "latest" for future compatibility
      sourceType: "module", // Added to explicitly declare we're using ES modules
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.app.json", // Link to your TypeScript config
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021, // Add ES2021 globals for modern features
        ...globals.es2022, // Add ES2022 globals for modern features
        ...globals.es2023, // Add ES2023 globals for modern features
        ...globals.es2024, // Add ES2024 globals for modern features
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Add rules for modern syntax features
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off", // Allow type inference
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      // Enable its recommended rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  }
);
