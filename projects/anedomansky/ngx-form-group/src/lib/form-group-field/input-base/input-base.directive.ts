import { Directive, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { noop } from 'rxjs';

@Directive()
export class InputBaseDirective implements ControlValueAccessor {
  /**
   * Label for the input element.
   */
  @Input({ required: true })
  label: string;

  @Input()
  required = false;

  onChange: (value: unknown) => void = noop;

  onTouched: () => void = noop;

  constructor(@Self() public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  writeValue(value: unknown): void {
    value && this.ngControl.control?.setValue(value);
  }

  registerOnChange(onChange: (value: unknown) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(): void {
    return;
  }
}
