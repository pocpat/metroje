// module.exports = {
//   // ... other Jest configs
//   moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Add 'node' for ESM support
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1', // Optional: Map module paths if needed
//   },
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
//   },
//   testEnvironment: 'jsdom', // If using React components in tests
//   testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'], // Adjust test file patterns if needed
// testEnvironment: 'jsdom', // If using React components in tests
// setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Optional: Setup file for common test environment
// };
module.exports = {
  // ... other Jest configs
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // Add this line
    transformIgnorePatterns: ['/node_modules/'] // Ignore node_modules by default
  },
  testEnvironment: 'jsdom', // If using React components in tests
};