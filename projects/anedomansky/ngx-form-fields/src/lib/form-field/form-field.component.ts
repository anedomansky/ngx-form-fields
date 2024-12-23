import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Field } from '../shared/models/form-field.model';
import { formViewProvider } from '../shared/providers/form-view.provider';
import { ValidationPipe } from '../validation/validation.pipe';
import { ValidatorsDirective } from '../validation/validators.directive';

@Component({
  selector: 'ngx-form-field',
  standalone: true,
  imports: [FormsModule, ValidatorsDirective, ValidationPipe],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider],
  host: {
    class: 'ngx-form-field',
    '[class]': 'field().styleClass',
  },
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {
  field = input.required<Field>();
}
