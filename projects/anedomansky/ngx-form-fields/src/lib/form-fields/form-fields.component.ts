import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field.component';
import { FormFieldConfig } from '../shared/form-field.model';
import { FormFieldsOptions } from '../shared/form-fields-options';
import { FormModel } from '../shared/form-model.model';

@Component({
  selector: 'ngx-form-fields',
  standalone: true,
  imports: [FormFieldComponent, FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ngx-form-fields',
  },
})
export class FormFieldsComponent {
  model = input<FormModel>();

  fields = input.required<FormFieldConfig[]>();

  options = input<FormFieldsOptions>();
}

/**
 * @example
 * model = { name: { first: '', last: ''}, street: '', city: ''};
 * fields = [
 * { key: 'name.first', type: 'text', required: true },
 * { key: 'name.last', type: 'text', required: true },
 * { key: 'street', type: 'text' },
 * { key: 'city', type: 'text', required: true },
 * ];
 *
 * <form #f="ngForm"(ngSubmit)="onSubmit(f)">
 *  <ngx-form-fields [model]="model" [fields]="fields"></ngx-form-fields>
 *  <button type="submit">Submit</button>
 * </form>
 *
 * translates to:
 *
 * <form #f="ngForm"(ngSubmit)="onSubmit(f)">
 *  <div ngModelGroup="name">
 *    <input type="text" name="first" [ngModel]="name.first" required />
 *    <input type="text" name="last" [ngModel]="name.last" required />
 *  </div>
 *    <input type="text" name="street" [ngModel]="street" />
 *    <input type="text" name="city"[ngModel]="city" required />
 *
 *    <button type="submit">Submit</button>
 * </form>
 *
 * ts:
 * form = new FormGroup({});
 *
 * html:
 * <form [formGroup]="form" (ngSubmit)="onSubmit()">
 *  <div [formGroup]="name">
 *    <input type="text" name="first" [ngModel]="name.first" required />
 *    <input type="text" name="last" [ngModel]="name.last" required />
 *  </div>
 *    <input type="text" name="street" [ngModel]="street" />
 *    <input type="text" name="city"[ngModel]="city" required />
 *
 *    <button type="submit">Submit</button>
 * </form>
 *
 * use case 1:
 * User wants to programmatically update specific NgModel values.
 *
 * use case 2:
 * User wants to know the validation state of the ngForm.
 *
 * use case 3:
 * User wants to submit the ngForm.
 *
 * use case 4:
 * User wants to reset the ngForm values.
 *
 * use case 5:
 * User wants to specify validators (both custom and standard) for single NgModels.
 *
 * use case 6:
 * User wants to specify validators (both custom and standard) for NgModelGroups.
 *
 * use case 7:
 * User wants to disable/enable specific NgModels.
 *
 * use case 8:
 * User wants to specify different attributes like required, readonly or tabindex.
 *
 * use case 9:
 * User wants to know the state of the ngForm at all times.
 *
 * use case 10:
 * User wants to specify options for the layout and other things.
 */

// TODO: implement own version of https://github.com/timdeschryver/ng-signal-forms/blob/main/packages/platform/src/lib/form-group.ts#L75-L83
// should take simple FormModel and create the necessary NgModelGroups and NgModels from it.
