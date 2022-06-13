import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.test.(js|ts)'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
  },
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
}

export default config

// block.ts
// __tests__
// 테스트 폴더만들어서 돌리겠다 라는사람도있음
// block.test.ts
