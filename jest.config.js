module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  setupFiles: [
    '<rootDir>/test/test-util/set-environment.ts'
  ]
};
