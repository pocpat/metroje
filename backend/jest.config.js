// module.exports.preset = 'ts-jest';
// module.exports.testEnvironment = 'node';
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "testMatch": ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageThreshold: {
      global: {
        lines: 0,
      },
    },
  };
  