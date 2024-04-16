import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropFileComponent } from './drag-n-drop-file.component';

describe('DragNDropFileComponent', () => {
  let component: DragNDropFileComponent;
  let fixture: ComponentFixture<DragNDropFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragNDropFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragNDropFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
