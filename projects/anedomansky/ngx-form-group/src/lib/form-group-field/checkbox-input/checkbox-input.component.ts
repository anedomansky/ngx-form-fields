import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputBaseDirective } from '../input-base/input-base.directive';

@Component({
  selector: 'ngx-checkbox-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInputComponent
  extends InputBaseDirective
  implements OnInit
{
  @Output()
  blurEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(this.ngControl);
    console.log(this.ngControl.control);
  }
}
