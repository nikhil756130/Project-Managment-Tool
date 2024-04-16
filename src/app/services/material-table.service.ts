import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MaterialTableService
{
  private tablePaginationState: any;

  setTablePaginationState(state: any): void {
    this.tablePaginationState = state;
  }

  getTablePaginationState(): any {
    return this.tablePaginationState;
  }
}