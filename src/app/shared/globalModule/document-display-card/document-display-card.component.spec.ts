import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDisplayCardComponent } from './document-display-card.component';

describe('DocumentDisplayCardComponent', () => {
  let component: DocumentDisplayCardComponent;
  let fixture: ComponentFixture<DocumentDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentDisplayCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
