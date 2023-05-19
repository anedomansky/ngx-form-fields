const path = require("path");

module.exports = {
  extends: path.join(__dirname, "../../../.eslintrc.js"),
  rules: {
    "@angular-eslint/component-selector": [
      "error",
      {
        prefix: "ngx-form-group",
        style: "kebab-case",
        type: "element",
      },
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        prefix: "ngx-form-group",
        style: "camelCase",
        type: "attribute",
      },
    ],
  },
  parserOptions: {
    project: path.join(__dirname, "../../../tsconfig.json"),
  },
};
