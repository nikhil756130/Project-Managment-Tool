import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeOverlayTabsComponent } from './add-employee-overlay-tabs.component';

describe('AddEmployeeOverlayTabsComponent', () => {
  let component: AddEmployeeOverlayTabsComponent;
  let fixture: ComponentFixture<AddEmployeeOverlayTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeOverlayTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmployeeOverlayTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
