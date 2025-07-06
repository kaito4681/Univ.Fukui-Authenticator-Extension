import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
