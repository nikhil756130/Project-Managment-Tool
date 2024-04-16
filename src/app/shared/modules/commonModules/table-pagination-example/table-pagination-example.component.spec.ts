import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationExampleComponent } from './table-pagination-example.component';

describe('TablePaginationExampleComponent', () => {
  let component: TablePaginationExampleComponent;
  let fixture: ComponentFixture<TablePaginationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePaginationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
