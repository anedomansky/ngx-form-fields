import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldConfig } from '../models/field.config';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'ngx-form-group-field',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    TextInputComponent,
    NumberInputComponent,
    CheckboxInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './form-group-field.component.html',
  styleUrls: ['./form-group-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupFieldComponent {
  @Input({ required: true }) field: FieldConfig;
}
