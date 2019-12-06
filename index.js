module.exports = {
  'extends': [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'plugin:prettier/recommended'
  ],
  'parser': 'babel-eslint',
  'plugins': [
    '@typescript-eslint',
    'eslint-plugin-react-hooks',
    'import',
    'jest',
    'json',
    'react-native'
  ],
  'env': {
    'browser': true,
    'jest/globals': true,
    'node': true
  },
  'overrides': [
    {
      'files': [
        '**/*.tsx',
        '**/*.ts'
      ],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'ecmaFeatures.jsx': true,
        'project': './tsconfig.json'
      }
    }
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    },
    'ecmaVersion': 2019,
    'sourceType': 'module'
  },
  'rules': {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_'
      }
    ],
    'global-require': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-absolute-path': 0,
    'import/no-extraneous-dependencies': 2,
    'import/no-unresolved': [
      2,
      {
        'commonjs': true,
        'amd': true,
        'ignore': [
          '.js',
          '.ts',
          '.tsx',
          '@',
        ],
        'caseSensitive': false
      }
    ],
    'json/*': [
      'error',
      {
        'allowComments': true
      }
    ],
    'max-len': 0,
    'no-console': 0,
    'no-extra-boolean-cast': 0,
    'no-nested-ternary': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-use-before-define': ['error', { 'variables': false }],
    'prettier/prettier': 0,
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.tsx',
          '.js',
          '.ts'
        ]
      }
    ],
    'react/jsx-props-no-spreading': 0,
    "react/no-array-index-key": 0,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx'
        ]
      }
    }
  }
};
