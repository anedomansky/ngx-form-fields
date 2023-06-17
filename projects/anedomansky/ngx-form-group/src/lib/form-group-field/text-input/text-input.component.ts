import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputBaseDirective } from '../input-base/input-base.directive';

@Component({
  selector: 'ngx-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent extends InputBaseDirective implements OnInit {
  @Input()
  placeholder?: string;

  @Input()
  readonly?: boolean;

  @Output()
  blurEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(this.ngControl);
    console.log(this.ngControl.control);
  }
}
