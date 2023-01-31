import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthPasswordSectionComponent } from './strength-password-section.component';

describe('StrengthPasswordSectionComponent', () => {
  let component: StrengthPasswordSectionComponent;
  let fixture: ComponentFixture<StrengthPasswordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthPasswordSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthPasswordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
