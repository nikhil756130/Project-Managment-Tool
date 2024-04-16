import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDocumentDetailsComponent } from './employee-document-details.component';

describe('EmployeeDocumentDetailsComponent', () => {
  let component: EmployeeDocumentDetailsComponent;
  let fixture: ComponentFixture<EmployeeDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDocumentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
