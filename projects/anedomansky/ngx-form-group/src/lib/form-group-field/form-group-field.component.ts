import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { FieldConfig } from '../models/field.config';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'ngx-form-group-field',
  standalone: true,
  imports: [],
  templateUrl: './form-group-field.component.html',
  styleUrls: ['./form-group-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupFieldComponent implements AfterViewInit {
  @Input({ required: true }) field: FieldConfig;

  @ViewChild('content', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  ngAfterViewInit(): void {
    // TODO: figure out how to set the formControl for the input element.
    // TODO: figure out how to detect value changes for the formControl and notify the form-group component.
    let input;

    switch (this.field.type) {
      case 'text':
        input = this.viewContainer.createComponent(TextInputComponent);
        input.instance.label = this.field.label;
        input.changeDetectorRef.detectChanges();
        break;
      case 'number':
        input = this.viewContainer.createComponent(NumberInputComponent);
        input.instance.label = this.field.label;
        input.changeDetectorRef.detectChanges();
        break;
      case 'checkbox':
        input = this.viewContainer.createComponent(CheckboxInputComponent);
        input.instance.label = this.field.label;
        input.changeDetectorRef.detectChanges();
        break;
      default:
        throw new Error('Invalid field type!');
    }
  }
}
