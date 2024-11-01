import { InjectionToken } from '@angular/core';

export type NgxFormGroupConfig = {
  appTitle: string;
};

export function getDefaultNgxFormGroupConfig(): NgxFormGroupConfig {
  return {
    appTitle: 'Ngx-form-group',
  };
}

export const NgxFormGroupConfigToken = new InjectionToken<NgxFormGroupConfig>(
  'NgxFormGroupConfig',
  {
    factory: () => getDefaultNgxFormGroupConfig(),
  },
);
