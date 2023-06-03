import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInputComponent } from './checkbox-input.component';

describe('CheckboxInputComponent', () => {
  let component: CheckboxInputComponent;
  let fixture: ComponentFixture<CheckboxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxInputComponent]
    });
    fixture = TestBed.createComponent(CheckboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
