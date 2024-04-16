import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPictureComponent } from './text-picture.component';

describe('TextPictureComponent', () => {
  let component: TextPictureComponent;
  let fixture: ComponentFixture<TextPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
