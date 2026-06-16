const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,

  {
    ignores: ["dist/*", "node_modules/*"],

    rules: {
      // 🧠 React + hooks safety
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 🚨 Prevent silent bugs (VERY important for game system)
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      // 🧩 Import safety (helps fix your previous path issues)
      "no-duplicate-imports": "error",

      // 🧠 Prevent unsafe any (important for mascot + reward system)
      "@typescript-eslint/no-explicit-any": "warn",

      // 🎯 Clean code for scalable app
      "prefer-const": "error",
      "no-var": "error",
    },
  },
]);