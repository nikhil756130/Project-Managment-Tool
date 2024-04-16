import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpProjectTableComponent } from './add-emp-project-table.component';

describe('AddEmpProjectTableComponent', () => {
  let component: AddEmpProjectTableComponent;
  let fixture: ComponentFixture<AddEmpProjectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmpProjectTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmpProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
