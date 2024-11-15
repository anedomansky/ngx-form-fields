import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { noop } from 'rxjs';

@Directive({
  selector: '[validators]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorsDirective,
      multi: true,
    },
  ],
})
export class ValidatorsDirective implements Validator {
  validators = input<ValidatorFn[]>([]);

  validate(control: AbstractControl): ValidationErrors | null {
    const validationErrors = this.validators()
      .map((validator) => validator(control))
      .filter((validationErrors) => validationErrors !== null)
      .reduce((acc, currentValidationErrors) => {
        Object.entries(currentValidationErrors).forEach(([key, value]) => {
          acc[key] = value;
        });
        return acc;
      }, {});

    if (!Object.keys(validationErrors).length) {
      return null;
    }

    return validationErrors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    // TODO: Do I need this if I already have input signals?
    noop();
  }
}
