import { Config } from 'jest';

import baseConfig from './jest.config';

const config: Config = {
  ...baseConfig,
  roots: ['<rootDir>/projects/test-app/src'],
  displayName: 'test-app',
};

export default config;
