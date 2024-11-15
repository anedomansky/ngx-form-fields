import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field.component';
import { FormGroupComponent } from '../form-group/form-group.component';
import { FormField } from '../shared/models/form-field.model';
import { FormFieldsOptions } from '../shared/models/form-fields-options';

@Component({
  selector: 'ngx-form-fields',
  standalone: true,
  imports: [FormFieldComponent, FormsModule, FormGroupComponent],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ngx-form-fields',
  },
})
export class FormFieldsComponent {
  fields = input.required<FormField[]>();

  options = input<FormFieldsOptions>();
}

/**
 * use case 1:
 * User wants to programmatically update specific NgModel values. ✓
 *
 * use case 2:
 * User wants to know the validation state of the ngForm. ✓
 *
 * use case 3:
 * User wants to submit the ngForm. ✓
 *
 * use case 4:
 * User wants to reset the ngForm values. ✓
 *
 * use case 5:
 * User wants to specify validators (both custom and standard) for single NgModels.
 *
 * use case 6:
 * User wants to specify validators (both custom and standard) for NgModelGroups.
 *
 * use case 7:
 * User wants to disable/enable specific NgModels. ✓
 *
 * use case 8:
 * User wants to specify different attributes like required, readonly or tabindex.
 *
 * use case 9:
 * User wants to know the state of the ngForm at all times. ✓
 *
 * use case 10:
 * User wants to specify options for the layout and other things.
 */
