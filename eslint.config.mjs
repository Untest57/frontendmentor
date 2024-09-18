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
    rules: {
      ...html.configs['flat/recommended'].rules,
      // prettier 충돌
      '@html-eslint/no-extra-spacing-attrs': [
        'error',
        {
          enforceBeforeSelfClose: true,
        },
      ],
      '@html-eslint/require-closing-tags': [
        'error',
        {
          selfClosing: 'always',
        },
      ],
      '@html-eslint/indent': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/element-newline': 'off',
    },
  },
  eslintConfigPrettier,
];
