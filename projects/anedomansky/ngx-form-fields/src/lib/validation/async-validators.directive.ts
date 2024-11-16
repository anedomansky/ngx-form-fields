import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[asyncValidators]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncValidatorsDirective,
      multi: true,
    },
  ],
})
export class AsyncValidatorsDirective implements AsyncValidator {
  asyncValidators = input<AsyncValidatorFn[]>([]);

  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // TODO: implement me
    throw new Error('Method not implemented.');
  }

  registerOnValidatorChange?(fn: () => void): void {
    // TODO: Do I need this if I already have input signals?
    throw new Error('Method not implemented.');
  }
}
