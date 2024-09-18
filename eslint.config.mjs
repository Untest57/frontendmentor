import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
  },
  eslintConfigPrettier,
];
