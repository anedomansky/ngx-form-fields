import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  sayHello(): Observable<string> {
    return of('Hello from Ngx-form-group!');
  }
}
