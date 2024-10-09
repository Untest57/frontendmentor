/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/html',
    'stylelint-config-clean-order',
    'stylelint-config-clean-order/error',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'selector-class-pattern': [
      '^([a-z]+:)?[a-z][-a-z0-9]+(__[-a-z0-9]+)?(--[a-z0-9]+)?$',
      {
        message: (selector) =>
          `Selector class ${selector} violates BEM Convention`,
        resolveNestedSelectors: true,
      },
    ],
  },
};
