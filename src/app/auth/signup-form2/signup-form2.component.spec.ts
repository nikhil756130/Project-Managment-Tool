import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm2Component } from './signup-form2.component';

describe('SignupForm2Component', () => {
  let component: SignupForm2Component;
  let fixture: ComponentFixture<SignupForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
