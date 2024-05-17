module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.jsx"],
  coveragePathIgnorePatterns: ["<rootDir>/src/index.jsx"],
};
