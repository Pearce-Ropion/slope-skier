module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    browser: true,
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
