module.exports = {
  testEnvironment: "jsdom",

  extensionsToTreatAsEsm: [".jsx"],

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  globals: {
    'babel-jest': {
      babelConfig: './babel.config.cjs'
    }
  }
};