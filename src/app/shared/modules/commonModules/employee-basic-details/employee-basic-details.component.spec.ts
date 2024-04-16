import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicDetailsComponent } from './employee-basic-details.component';

describe('EmployeeBasicDetailsComponent', () => {
  let component: EmployeeBasicDetailsComponent;
  let fixture: ComponentFixture<EmployeeBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeBasicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
