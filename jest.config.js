module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/{(store),(pages)}/**",
    "!**.env.js",
    "!**/jest.config.js",
    "!**/*.story.{tsx,jsx,ts,js}",
  ],
  projects: ["<rootDir>/src"],
};
