import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgxFormGroupConfigToken } from '../config/ngx-form-group-config';
import { SampleService } from '../core/services/sample/sample.service';

@Component({
  selector: 'ngx-form-group-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class SampleComponent {
  private sampleService = inject(SampleService);

  protected config = inject(NgxFormGroupConfigToken);

  greeting$ = this.sampleService.sayHello();
}
