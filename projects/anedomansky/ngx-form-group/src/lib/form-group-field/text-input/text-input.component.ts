import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'ngx-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  /**
   * Label for the input element.
   */
  @Input({ required: true })
  label: string;

  @Input()
  disabled = false;

  @Input()
  placeholder?: string;

  @Output()
  blurEvent: EventEmitter<void> = new EventEmitter<void>();

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

  setDisabledState(isDisabled: boolean): void {
    // This seems to be optional - not necessary if used with this.form.get(controlName).disable()
    // TODO: Test with ngModel
    console.log(isDisabled);
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    console.log(this.ngControl);
    console.log(this.ngControl.control);
  }
}
