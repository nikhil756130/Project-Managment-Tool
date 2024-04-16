import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOverlayTitleComponent } from './app-overlay-title.component';

describe('AppOverlayTitleComponent', () => {
  let component: AppOverlayTitleComponent;
  let fixture: ComponentFixture<AppOverlayTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOverlayTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOverlayTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
