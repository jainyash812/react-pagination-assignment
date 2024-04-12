export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverageFrom:[
      "src/**/*.{ts,tsx,js,jsx}",
      "!src/**/*.d.ts"
    ],
    collectCoverage:false
};