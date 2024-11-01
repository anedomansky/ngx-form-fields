import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  getDefaultNgxFormGroupConfig,
  NgxFormGroupConfig,
  NgxFormGroupConfigToken,
} from './config/ngx-form-group-config';
import { SampleServiceToken } from './core/services/sample/sample.config';
import { SampleService } from './core/services/sample/sample.service';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [],
  imports: [SampleComponent],
  providers: [
    {
      provide: SampleServiceToken,
      useClass: SampleService,
    },
    {
      provide: NgxFormGroupConfigToken,
      useValue: getDefaultNgxFormGroupConfig(),
    },
  ],
  exports: [SampleComponent],
})
export class NgxFormGroupModule {
  static forRoot(config: NgxFormGroupConfig): ModuleWithProviders<NgxFormGroupModule> {
    return {
      ngModule: NgxFormGroupModule,
      providers: [
        {
          provide: NgxFormGroupConfigToken,
          useValue: config,
        },
      ],
    };
  }
}
