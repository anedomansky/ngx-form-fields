import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormGroupFieldComponent } from '../form-group-field/form-group-field.component';
import { FieldConfig } from '../models/field.config';

@Component({
  selector: 'ngx-form-group',
  standalone: true,
  imports: [FormGroupFieldComponent, NgFor, ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements OnInit {
  @Input({ required: true }) form: FormGroup;

  @Input() fields: FieldConfig[] = [];

  // TODO: figure out how to fill the FormGroup with all needed FormControls
  // TODO: use the created FormControl as @Input() for the form-field component
  ngOnInit(): void {
    this.fields.forEach((field) => {
      if (!field.control) {
        const control = new FormControl({
          value: field.defaultValue,
          disabled: field.options?.disabled,
        });
        field.control = control;
      }
      this.form.setControl(field.name, field.control);
    });
    console.log(this.form);

    this.form.valueChanges.subscribe((change) => console.log(change));
  }
}
