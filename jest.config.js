module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!babel.config.js",
    "!jest.config.js",
    "!/cypress/**"
  ],
  moduleDirectories: [
    'node_modules',
    'utils',
    __dirname,
  ],
};