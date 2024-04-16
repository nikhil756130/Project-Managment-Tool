import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithImageUploadComponent } from './text-with-image-upload.component';

describe('TextWithImageUploadComponent', () => {
  let component: TextWithImageUploadComponent;
  let fixture: ComponentFixture<TextWithImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextWithImageUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextWithImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
