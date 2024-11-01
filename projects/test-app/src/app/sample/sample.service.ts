import { Injectable } from '@angular/core';
import { SampleServiceConfig } from '@anedomansky/ngx-form-group';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppSampleService implements SampleServiceConfig {
  sayHello(): Observable<string> {
    return of('Welcome from test-app!');
  }
}
