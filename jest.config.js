module.exports = {
  verbose: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!**/*.stories.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!babel.config.js',
    '!jest.config.js',
    '!/cypress/**',
  ],
  coverageDirectory: '.coverage-jest',
  moduleDirectories: [
    'node_modules',
    'utils',
    __dirname,
  ],
};
