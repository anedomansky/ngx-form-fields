import {
  FormComponent,
  FormField,
  FormFieldsComponent,
  FormFieldTypes,
} from '@anedomansky/ngx-form-fields';
import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormComponent, FormsModule, FormFieldsComponent, JsonPipe],
})
export class AppComponent implements AfterViewInit {
  protected form = viewChild<NgForm>('f');

  fields: FormField<string>[] = [
    {
      name: 'name',
      type: 'group',
      label: 'Name',
      fields: [
        {
          name: 'first',
          type: FormFieldTypes.TEXT,
          label: 'First name',
          required: true,
          defaultValue: 'a',
        },
        {
          name: 'last',
          type: FormFieldTypes.TEXT,
          label: 'Last name',
          readonly: true,
          defaultValue: 'b',
        },
      ],
    },
    {
      name: 'address',
      type: 'group',
      label: 'Address',
      fields: [
        {
          name: 'street',
          type: FormFieldTypes.TEXT,
          label: 'Street',
          defaultValue: 'c',
          disabled: true,
        },
        {
          name: 'plz',
          type: FormFieldTypes.TEXT,
          label: 'Postal code',
          required: true,
          defaultValue: 'd',
        },
        {
          name: 'city',
          type: FormFieldTypes.TEXT,
          label: 'City',
          required: true,
          defaultValue: 'e',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'mail',
          type: FormFieldTypes.TEXT,
          label: 'Email',
          required: true,
          defaultValue: 'f',
        },
        {
          name: 'tel',
          type: FormFieldTypes.TEXT,
          label: 'Telephone',
          required: true,
          defaultValue: 'g',
        },
      ],
    },
    {
      name: 'extra',
      type: FormFieldTypes.TEXT,
      label: 'Extra',
      defaultValue: 'h',
    },
  ];

  ngAfterViewInit(): void {
    this.form()?.valueChanges?.subscribe((value) => {
      console.log('valueChanges:', value);
    });
  }

  onSubmit(form: NgForm): void {
    console.log(this.fields);
    console.log(form.value);
    console.log('form.valid:', form.valid);
    console.log(form.form.getRawValue());
  }
}
