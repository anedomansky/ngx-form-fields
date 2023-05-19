import { TestBed } from '@angular/core/testing';

import { NgxFormGroupService } from './ngx-form-group.service';

describe('NgxFormGroupService', () => {
  let service: NgxFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
