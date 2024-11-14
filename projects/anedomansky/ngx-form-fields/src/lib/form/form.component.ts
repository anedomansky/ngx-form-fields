import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field.component';
import { FormGroupComponent } from '../form-group/form-group.component';
import { FormField } from '../shared/form-field.model';

@Component({
  selector: 'ngx-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, FormFieldComponent, FormGroupComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  fields = input.required<FormField[]>();

  onSubmit = output<NgForm>();
}
