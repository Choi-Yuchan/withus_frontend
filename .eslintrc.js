module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/prop-types": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
  ignorePatterns: ["build", "dist", "public"],
};
