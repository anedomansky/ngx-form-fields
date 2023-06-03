import { FieldConfig, FormGroupComponent } from '@anedomansky/ngx-form-group';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormGroupComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({});

  fields: FieldConfig[] = [
    {
      name: 'first',
      type: 'text',
      label: 'First',
    },
    {
      name: 'second',
      type: 'number',
      label: 'Second',
    },
    {
      name: 'third',
      type: 'checkbox',
      label: 'Third',
    },
  ];
}
