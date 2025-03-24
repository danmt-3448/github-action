module.exports = {
  root: true,
  env: { node: true, browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier',

    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/default': 0,
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-refresh/only-export-components': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 100,
        jsxSingleQuote: true
      }
    ]
  }
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       project: './tsconfig.json'
  //     }
  //   }
  // }
}
