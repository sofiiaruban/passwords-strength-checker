import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthSectionComponent } from './password-strength-section.component';

describe('PasswordStrengthSectionComponent', () => {
  let component: PasswordStrengthSectionComponent;
  let fixture: ComponentFixture<PasswordStrengthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
