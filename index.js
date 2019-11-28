module.exports = {
  'extends': [
    'eslint-config-react-native-wcandillon',
    'plugin:json/recommended',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'jest',
    'import',
    '@typescript-eslint',
    'json',
  ],
  'env': {
    'jest/globals': true,
    'node': true,
    'browser': true,
  },
  'overrides': [
    {
      'files': [
        '**/*.tsx',
        '**/*.ts',
      ],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json',
        'ecmaFeatures.jsx': true,
      },
    },
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  'rules': {
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    'prettier/prettier': 0,
    'no-console': 0,
    'import/no-absolute-path': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'max-len': 0,
    'no-extra-boolean-cast': 0,
    'no-undef': [
      0,
      {},
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
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
        'caseSensitive': false,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.tsx',
          '.js',
          '.ts',
        ],
      },
    ],
    'json/*': [
      'error',
      {
        'allowComments': true,
      },
    ]
  }
};
