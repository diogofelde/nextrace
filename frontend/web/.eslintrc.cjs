module.exports = {
 root: true,
 env: {
 browser: true,
 es2021: true,
 node: true,
 },
 extends: [
 "eslint:recommended",
 "plugin:react/recommended",
 "plugin:import/errors",
 "plugin:import/warnings",
 ],
 parserOptions: {
 ecmaFeatures: {
 jsx: true,
 },
 ecmaVersion: "latest",
 sourceType: "module",
 },
 plugins: ["react", "import"],
 settings: {
 react: {
 version: "detect",
 },
 },
 rules: {
 "react/react-in-jsx-scope": "off",
 "no-unused-vars": "warn",
 "import/no-unresolved": "warn",
 "import/order": [
 "warn",
 {
 groups: ["builtin", "external", "internal"],
 alphabetize: { order: "asc", caseInsensitive: true },
 },
 ],
 },
};