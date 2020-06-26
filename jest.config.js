module.exports = {
  clearMocks: true,
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/setupTests.js`],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  coveragePathIgnorePatterns: [
    '/*.styles',
    '/node_modules',
    '/utils',
    '/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  transform: {
    '^.+\\.js$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
}
