/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-recess-order",
    "@double-great/stylelint-a11y/recommended",
  ],
  plugins: [
    "stylelint-plugin-logical-css",
    "stylelint-plugin-use-baseline",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-use-nesting",
    "stylelint-plugin-defensive-css",
  ],
  rules: {
    "csstools/use-nesting": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/use-baseline": [
      true,
      {
        available: 2024,
      },
    ],
    "plugin/use-defensive-css": [
      true,
      {
        "accidental-hover": true,
        "flex-wrapping": true,
        "scroll-chaining": true,
        "scrollbar-gutter": true,
        "vendor-prefix-grouping": true,
      },
    ],
    "plugin/use-logical-properties-and-values": [true, { severity: "warning" }],
    "plugin/use-logical-units": [true, { severity: "warning" }],
  },
};
