import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitionDetailsComponent } from './prohibition-details.component';

describe('ProhibitionDetailsComponent', () => {
  let component: ProhibitionDetailsComponent;
  let fixture: ComponentFixture<ProhibitionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProhibitionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProhibitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
