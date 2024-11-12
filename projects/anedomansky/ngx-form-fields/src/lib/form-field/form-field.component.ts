import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormFieldConfig } from '../shared/form-field.model';
import { FormFieldControlDirective } from './form-field-control.directive';

@Component({
  selector: 'ngx-form-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{ directive: FormFieldControlDirective, inputs: ['name'] }],
})
export class FormFieldComponent implements OnInit {
  protected formFieldControlDirective = inject(FormFieldControlDirective);

  field = input.required<FormFieldConfig>();

  value = signal<unknown>(null);

  ngOnInit(): void {
    this.value.set(this.field().defaultValue);
  }
}
