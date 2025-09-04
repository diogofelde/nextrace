// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['node_modules/', 'dist/', 'public/'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': 'warn',
    'vue/no-unused-components': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, semi: false }]
  }
}