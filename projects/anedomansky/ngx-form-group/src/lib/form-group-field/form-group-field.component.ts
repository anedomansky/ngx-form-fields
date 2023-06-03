import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FieldConfig } from '../models/field.config';

@Component({
  selector: 'ngx-form-group-field',
  standalone: true,
  imports: [],
  templateUrl: './form-group-field.component.html',
  styleUrls: ['./form-group-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupFieldComponent {
  @Input({ required: true }) field: FieldConfig;
  // TODO: ngOnInit -> instantiate correct input component (type)
}
