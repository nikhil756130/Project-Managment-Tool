import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithTimePickerComponent } from './checkbox-with-time-picker.component';

describe('CheckboxWithTimePickerComponent', () => {
  let component: CheckboxWithTimePickerComponent;
  let fixture: ComponentFixture<CheckboxWithTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxWithTimePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxWithTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
