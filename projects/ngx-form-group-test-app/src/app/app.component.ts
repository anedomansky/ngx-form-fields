import {
  FieldConfig,
  FormGroupComponent,
  Options,
} from '@anedomansky/ngx-form-group';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormGroupComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form = new FormGroup({});

  fields: FieldConfig[] = [
    {
      name: 'first',
      type: 'text',
      label: 'First',
      placeholder: 'text',
      defaultValue: '',
      options: {
        disabled: false,
        readonly: false,
        required: false,
      },
    },
    {
      name: 'second',
      type: 'number',
      label: 'Second',
      placeholder: '0',
      defaultValue: 0,
    },
    {
      name: 'third',
      type: 'checkbox',
      label: 'Third',
      defaultValue: true,
    },
  ];

  options: Options = {
    layout: {
      columns: 2,
    },
  };

  ngOnInit(): void {
    this.form.valueChanges.subscribe((change) => console.log('change', change));
    this.form.statusChanges.subscribe((status) =>
      console.log('status', status)
    );
  }

  toggleInputActivation(name: string, enable: boolean): void {
    if (enable) {
      this.form.get(name)?.enable();
    } else {
      this.form.get(name)?.disable();
    }
  }

  onSubmit(event: FormDataEvent): void {
    console.log(event);
    console.log(this.form.value);
  }
}
