export default {
  preset: "ts-jest/presets/default-esm",  
  testEnvironment: "node",
  rootDir: "..",
  testMatch: ["<rootDir>/HW18/test_api/**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true
      }
    ]
  }
};
