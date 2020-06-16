module.exports = {
    env: {
      jest: true,
      browser: true,
      es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:cypress/recommended'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'jest'],
    rules: {
      "semi": 0,
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
      'no-param-reassign': ["error", { "props": false }],
      'import/no-unresolved': [2, { ignore: ['^test-utils$'] }],
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {devDependencies: true},
      ],
      'arrow-parens': ['error', 'as-needed'],
      'object-curly-spacing': ['error', 'always'],
    },
  };
  