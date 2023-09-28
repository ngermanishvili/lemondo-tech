module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],

  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/components/$1", // adjusted this line
    "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy" // Mocks styling files
  },
};
