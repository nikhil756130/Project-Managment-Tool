import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileCardHeaderComponent } from './employee-profile-card-header.component';

describe('CardHeaderComponent', () => {
  let component: EmployeeProfileCardHeaderComponent;
  let fixture: ComponentFixture<EmployeeProfileCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileCardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeProfileCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
