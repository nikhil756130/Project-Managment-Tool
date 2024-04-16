import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInputFieldComponent } from './label-input-field.component';

describe('LabelInputFieldComponent', () => {
  let component: LabelInputFieldComponent;
  let fixture: ComponentFixture<LabelInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
