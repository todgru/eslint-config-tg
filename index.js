"use strict";

module.exports = {
  globals: {
    MyGlobal: true
  },
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["promise", "unicorn", "prettier"],
  rules: {
    "dot-notation": ["error"],
    eqeqeq: ["error", "smart"],
    "no-else-return": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    strict: ["error", "global"],
    "linebreak-style": ["error", "unix"],
    "no-lonely-if": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": ["error", { args: "none" }],
    "no-useless-computed-key": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "prefer-const": ["warn", { destructuring: "all" }],
    "no-empty-function": ["error"],
    "vars-on-top": ["error"],

    "unicorn/filename-case": ["warn", { case: "kebabCase" }],
    "unicorn/throw-new-error": ["error"],
    "unicorn/no-array-instanceof": ["error"],
    "unicorn/no-new-buffer": ["error"],
    "unicorn/no-hex-escape": ["error"],
    "unicorn/prefer-starts-ends-with": ["warn"],

    "prettier/prettier": "error",
    // "prettier/trailing-comma": "es5",
    // "prettier/print-width": 100,

    "promise/catch-or-return": ["error"],
  },
};
