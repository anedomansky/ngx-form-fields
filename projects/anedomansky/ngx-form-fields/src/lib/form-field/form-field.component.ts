import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Field } from '../shared/form-field.model';
import { formViewProvider } from '../shared/form-view.provider';

@Component({
  selector: 'ngx-form-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider],
})
export class FormFieldComponent {
  field = input.required<Field>();
}
