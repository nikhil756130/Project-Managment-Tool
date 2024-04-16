import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeeBasicDetailsComponent } from './app-employee-basic-details.component';

describe('AppEmployeeBasicDetailsComponent', () => {
  let component: AppEmployeeBasicDetailsComponent;
  let fixture: ComponentFixture<AppEmployeeBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEmployeeBasicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEmployeeBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
