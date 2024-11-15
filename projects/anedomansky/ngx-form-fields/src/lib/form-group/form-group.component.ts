import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field.component';
import { Group } from '../shared/models/form-field.model';
import { formViewProvider } from '../shared/providers/form-view.provider';

@Component({
  selector: 'ngx-form-group',
  standalone: true,
  imports: [FormsModule, FormFieldComponent],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider],
})
export class FormGroupComponent {
  group = input.required<Group>();
}
