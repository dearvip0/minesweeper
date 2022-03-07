/* eslint-disable no-undef */
module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:storybook/recommended',
      'plugin:prettier/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'prettier'],
   settings: {
      react: {
         version: 'detect',
      },
   },
   rules: {
      'prettier/prettier': [
         0,
         {
            endOfLine: 'auto',
         },
         {
            usePrettierrc: false,
         },
      ],
      'react/no-unescaped-entities': 0,
   },
}
