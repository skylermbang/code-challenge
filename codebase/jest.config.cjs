module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], 
  moduleNameMapper: {
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@repositories/(.*)$': '<rootDir>/src/repositories/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
  },
};
