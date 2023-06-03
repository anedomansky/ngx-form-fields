import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { FormGroupFieldComponent } from '../form-group-field/form-group-field.component';
import { FieldConfig } from '../models/field.config';

@Component({
  selector: 'ngx-form-group',
  standalone: true,
  imports: [FormGroupFieldComponent, NgFor],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent {
  @Input({ required: true }) form: FormGroup | FormArray;

  @Input() fields: FieldConfig[] = [];
}
