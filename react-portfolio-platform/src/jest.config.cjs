module.exports = {
  testEnvironment: "jsdom",

  extensionsToTreatAsEsm: [".jsx"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};