module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/{(store),(pages)}/**',
    '!**.env.js',
    '!**/jest.config.js',
    '!**/*.story.{tsx,jsx,ts,js}',
  ],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  projects: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  setupFiles: ['dotenv/config', './test/setup-client-tests.js'],
};
