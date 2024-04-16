import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm1Component } from './signup-form1.component';

describe('SignupForm1Component', () => {
  let component: SignupForm1Component;
  let fixture: ComponentFixture<SignupForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
