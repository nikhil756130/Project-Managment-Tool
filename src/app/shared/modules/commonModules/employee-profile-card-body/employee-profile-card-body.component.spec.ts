import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileCardBodyComponent } from './employee-profile-card-body.component';

describe('CardBodyComponent', () => {
  let component: EmployeeProfileCardBodyComponent;
  let fixture: ComponentFixture<EmployeeProfileCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileCardBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeProfileCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
