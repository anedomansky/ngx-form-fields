import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  createFormGroup() {
    noop();
  }

  createFormField() {
    noop();
  }
}
