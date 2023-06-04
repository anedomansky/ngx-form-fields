import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

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

  onChange: (value: any) => void = () => {};

  onTouched: () => void = () => {};

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  writeValue(value: any): void {
    value && this.ngControl.control?.setValue(value);
  }

  registerOnChange(onChange: (value: any) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    console.log(this.ngControl);
    console.log(this.ngControl.control);
  }
}
