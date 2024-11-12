import {
  FormComponent,
  FormFieldConfig,
  FormFieldsComponent,
} from '@anedomansky/ngx-form-fields';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormComponent, FormsModule, FormFieldsComponent, JsonPipe],
})
export class AppComponent {
  model: any = {
    name: { first: 'a', last: 'blub' },
    street: 'c',
    city: 'd',
  };

  fields: FormFieldConfig<string>[] = [
    { key: 'name.first', type: 'text', required: true, defaultValue: 'a' },
    { key: 'name.last', type: 'text', required: true, defaultValue: 'b' },
    { key: 'street', type: 'text', defaultValue: 'c', disabled: true },
    { key: 'city', type: 'text', required: true, defaultValue: 'd' },
  ];

  onSubmit(form: NgForm): void {
    console.log(this.fields);
    console.log(form.value);
  }
}
