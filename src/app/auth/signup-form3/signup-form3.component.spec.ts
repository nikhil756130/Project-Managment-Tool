import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm3Component } from './signup-form3.component';

describe('SignupForm3Component', () => {
  let component: SignupForm3Component;
  let fixture: ComponentFixture<SignupForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForm3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
