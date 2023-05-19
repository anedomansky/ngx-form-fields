import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormGroupComponent } from './ngx-form-group.component';

describe('NgxFormGroupComponent', () => {
  let component: NgxFormGroupComponent;
  let fixture: ComponentFixture<NgxFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxFormGroupComponent]
    });
    fixture = TestBed.createComponent(NgxFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
