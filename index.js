module.exports = {
  "extends": [
    "eslint-config-react-native-wcandillon"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "jest",
    "import",
    "@typescript-eslint"
  ],
  "env": {
    "jest/globals": true,
    "node": true,
    "browser": true
  },
  "overrides": [
    {
      "files": [
        "**/*.tsx",
        "**/*.ts"
      ],
      "parser": "@typescript-eslint/parser"
    }
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "ignore": [
          ".js",
          ".ts",
          ".tsx"
        ],
        "caseSensitive": false
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".tsx",
          ".js",
          ".ts"
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": [
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "src/"
        }
      ]
    }
  }
}
