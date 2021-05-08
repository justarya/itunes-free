module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
    './node_modules/eslint-config-airbnb-base/rules/errors.js',
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
    './node_modules/eslint-config-airbnb-base/rules/imports.js',
    './node_modules/eslint-config-airbnb-base/rules/node.js',
    // './node_modules/eslint-config-airbnb-base/rules/strict.js',
    './node_modules/eslint-config-airbnb-base/rules/style.js',
    './node_modules/eslint-config-airbnb-base/rules/variables.js',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
  }
};
