// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  setupFilesAfterEnv: ['<rootDir>/web/jest.setup.js']
}

module.exports = config
