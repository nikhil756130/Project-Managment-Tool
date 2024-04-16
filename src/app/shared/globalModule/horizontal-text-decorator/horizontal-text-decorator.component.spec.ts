import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTextDecoratorComponent } from './horizontal-text-decorator.component';

describe('HorizontalTextDecoratorComponent', () => {
  let component: HorizontalTextDecoratorComponent;
  let fixture: ComponentFixture<HorizontalTextDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalTextDecoratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalTextDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
