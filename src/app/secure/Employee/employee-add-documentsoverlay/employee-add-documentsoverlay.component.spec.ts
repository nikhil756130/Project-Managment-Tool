import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddDocumentsoverlayComponent } from './employee-add-documentsoverlay.component';

describe('EmployeeAddDocumentsoverlayComponent', () => {
  let component: EmployeeAddDocumentsoverlayComponent;
  let fixture: ComponentFixture<EmployeeAddDocumentsoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddDocumentsoverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeAddDocumentsoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
