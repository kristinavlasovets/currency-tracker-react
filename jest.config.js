/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  setupFiles: ['<rootDir>/jest.stub.js'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
  },
};
