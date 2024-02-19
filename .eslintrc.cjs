/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: {
      node: true,
      es2022: true,
    },
    reportUnusedDisableDirectives: true,
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    overrides: [
      {
        files: ['**/*.ts'],
        plugins: ['@typescript-eslint'],
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/strict-type-checked',
          '@strv/react',
          '@strv/react/optional',
          '@strv/typescript',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: true,
          tsconfigRootDir: __dirname,
        },
      },
    ],
  };