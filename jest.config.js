module.exports = {
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
};
