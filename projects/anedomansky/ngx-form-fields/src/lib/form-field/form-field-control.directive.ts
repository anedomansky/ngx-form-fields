import {
  Directive,
  inject,
  Injector,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
} from '@angular/forms';
import { noop, Subscription } from 'rxjs';

@Directive({
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormFieldControlDirective,
    },
  ],
})
export class FormFieldControlDirective
  implements ControlValueAccessor, OnInit, OnDestroy
{
  private controlContainer = inject(ControlContainer);

  private injector = inject(Injector);

  private subscription?: Subscription;

  private value = signal<unknown>(null);

  control = new FormControl();

  onChange: (value: string) => void = noop;

  onTouched: () => void = noop;

  ngOnInit(): void {
    const ngControl = this.injector.get(NgControl, null, {
      self: true,
      optional: true,
    });

    if (ngControl instanceof NgModel) {
      this.control = ngControl.control;
      this.subscription = ngControl.control.valueChanges.subscribe((value) => {
        if (ngControl.model !== value || ngControl.viewModel !== value) {
          // ngControl.viewToModelUpdate(value);
        }
      });
      const parentForm = this.controlContainer.control as FormGroup;
      parentForm.addControl(ngControl.name, this.control);
      console.log(parentForm.controls);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
