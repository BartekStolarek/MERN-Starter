module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  setupFiles: [
    '<rootDir>/test/test-utils/set-environment.ts'
  ]
};
