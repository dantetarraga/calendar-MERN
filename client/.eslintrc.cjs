module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    './node_modules/standard/eslintrc.json',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/prop-types': 'off',
    'multiline-ternary': ['error', 'never'],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'react-hooks/exhaustive-deps': 'off',
    'no-extra-boolean-cast': 'off',
    'multiline-ternary': ['error', 'always'],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^react-dom'],
          ['^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^.+\\.css$']
        ]
      }
    ]
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  }
}
