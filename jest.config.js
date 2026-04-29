/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  moduleDirectories: ["node_modules", "src"],
};
