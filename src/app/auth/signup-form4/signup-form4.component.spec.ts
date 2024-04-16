import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm4Component } from './signup-form4.component';

describe('SignupForm4Component', () => {
  let component: SignupForm4Component;
  let fixture: ComponentFixture<SignupForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForm4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
