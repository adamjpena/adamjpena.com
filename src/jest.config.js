module.exports = {
  name: "Client",
  displayName: "Client Tests",
  modulePaths: ["../"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$": "identity-obj-proxy",
    "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["../test/setup-client-tests.js"],
};
