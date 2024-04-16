import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDataComponent } from './salary-data.component';

describe('SalaryDataComponent', () => {
  let component: SalaryDataComponent;
  let fixture: ComponentFixture<SalaryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
