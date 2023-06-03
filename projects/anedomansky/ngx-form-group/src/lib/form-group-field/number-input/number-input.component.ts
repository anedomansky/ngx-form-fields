import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-number-input',
  standalone: true,
  imports: [],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent {
  /**
   * Label for the input element.
   */
  @Input({ required: true })
  label: string;
}
