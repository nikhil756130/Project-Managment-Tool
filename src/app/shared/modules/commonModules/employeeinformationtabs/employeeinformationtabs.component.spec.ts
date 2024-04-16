import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeinformationtabsComponent } from './employeeinformationtabs.component';

describe('EmployeeinformationtabsComponent', () => {
  let component: EmployeeinformationtabsComponent;
  let fixture: ComponentFixture<EmployeeinformationtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeinformationtabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeinformationtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
