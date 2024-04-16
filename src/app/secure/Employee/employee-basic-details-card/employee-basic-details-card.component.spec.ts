import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicDetailsCardComponent } from './employee-basic-details-card.component';

describe('EmployeeBasicDetailsCardComponent', () => {
  let component: EmployeeBasicDetailsCardComponent;
  let fixture: ComponentFixture<EmployeeBasicDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeBasicDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeBasicDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
