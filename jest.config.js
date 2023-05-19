module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/cypress/",
    "/projects/.*/files/",
  ],
  testEnvironment: "jsdom",
  coverageDirectory: "coverage/",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/cypress/",
    "/dist/",
    "/testing/",
    ".html",
  ],
  moduleNameMapper: {
    "@anedomansky/ngx-form-group":
      "<rootDir>/dist/anedomansky/ngx-form-group/fesm2020/anedomansky-ngx-form-group.mjs",
  },
};
