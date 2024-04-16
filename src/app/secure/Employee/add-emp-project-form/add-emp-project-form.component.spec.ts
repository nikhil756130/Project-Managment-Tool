import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpProjectFormComponent } from './add-emp-project-form.component';

describe('AddEmpProjectFormComponent', () => {
  let component: AddEmpProjectFormComponent;
  let fixture: ComponentFixture<AddEmpProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmpProjectFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmpProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
