import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationIconComponent } from './form-validation-icon.component';

describe('FormValidationIconComponent', () => {
  let component: FormValidationIconComponent;
  let fixture: ComponentFixture<FormValidationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidationIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
