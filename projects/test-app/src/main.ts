import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { SampleServiceToken } from '@anedomansky/ngx-form-group';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { AppSampleService } from './app/sample/sample.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    {
      provide: SampleServiceToken,
      useClass: AppSampleService,
    },
  ],
});
