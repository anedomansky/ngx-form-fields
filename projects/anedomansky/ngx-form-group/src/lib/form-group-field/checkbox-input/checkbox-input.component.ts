import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-checkbox-input',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInputComponent {
  /**
   * Label for the input element.
   */
  @Input({ required: true })
  label: string;
}
