module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error', // Displays Prettier errors as ESLint errors
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    },
  };
  