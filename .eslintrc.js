module.exports = {
  root: true,
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    '@react-native-community',
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: ["react", "import", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "selector": "variable",
        "leadingUnderscore": "allow"
      },
      {
        "format": ["camelCase", "PascalCase"],
        "selector": "function"
      },
      {
        "format": ["PascalCase"],
        "selector": "interface"
      },
      {
        "format": ["PascalCase"],
        "selector": "typeAlias"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", ["parent", "sibling"], "index"],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "external",
            "position": "after"
          }
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ]
  }
};
