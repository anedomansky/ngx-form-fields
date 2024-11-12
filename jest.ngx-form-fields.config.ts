import { Config } from 'jest';

import baseConfig from './jest.config';

const config: Config = {
  ...baseConfig,
  roots: ['<rootDir>/projects/anedomansky/ngx-form-fields'],
  displayName: '@anedomansky/ngx-form-fields',
};

export default config;
