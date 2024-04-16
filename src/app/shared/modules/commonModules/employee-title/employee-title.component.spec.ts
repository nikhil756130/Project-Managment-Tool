import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTitleComponent } from './employee-title.component';

describe('EmployeeTitleComponent', () => {
  let component: EmployeeTitleComponent;
  let fixture: ComponentFixture<EmployeeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
