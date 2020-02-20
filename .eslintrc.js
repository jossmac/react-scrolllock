module.exports = {
  extends: 'react-app',
  plugins: ['prettier', 'import', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/no-extraneous-dependencies': 'error',
    'jsx-a11y/anchor-is-valid': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
