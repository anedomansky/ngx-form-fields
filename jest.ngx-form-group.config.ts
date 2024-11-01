import { Config } from 'jest';

import baseConfig from './jest.config';

const config: Config = {
  ...baseConfig,
  roots: ['<rootDir>/projects/anedomansky/ngx-form-group'],
  displayName: '@anedomansky/ngx-form-group',
};

export default config;
