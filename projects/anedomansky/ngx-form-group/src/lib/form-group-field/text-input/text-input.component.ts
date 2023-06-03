import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  /**
   * Label for the input element.
   */
  @Input({ required: true })
  label: string;
}
