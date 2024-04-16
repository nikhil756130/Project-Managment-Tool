import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CountEmployeeService } from '../../../services/count-employee/count-employee.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import employeelistviewheader from '../../../../../assets/stubs/Employees/employee-table-header.json'
import { EmployeeDetailsModel } from 'src/app/shared/models/model';

@Component({
  selector: 'app-table-pagination-example',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule,
    MatMenuModule,
  ],
  templateUrl: './table-pagination-example.component.html',
  styleUrl: './table-pagination-example.component.scss',
  providers: [CountEmployeeService],
})
export class TablePaginationExampleComponent implements AfterViewInit {


  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  employeelistviewheader = employeelistviewheader.employeeTableHeader;
  constructor(private http: HttpClient, private employeeService: CountEmployeeService, private router: Router, private route: ActivatedRoute) { }

  customers: any;
  selectAll = false;
  showRouterOutlet = false;
  dataSource: any;
  displayedColumns: string[] = [
    'customercheckbox',
    'id',
    'employee_name',
    'designation',
    'department',
    'no_of_projects',
    'emailid',
    'joining_date',
    'status',
    'action',
  ];

  getemp(): void {
    this.employeeService.employeeDetailsGetting().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource(data.items);
        console.log(this.dataSource + "pagination");
      }

    );
  }
  formgroup!: FormControl;
  searchboxdata: any;
  ngOnInit(): void {
    this.http.get<any>('../../../../assets/stubs/Employees/searchbox.json').subscribe((data) => {
      this.searchboxdata = data.searchbox;
      this.getemp();
    })
  }
  checks = false;
  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    }
    else {
      this.checks = false;
    }
  }
  showActions(element: any): void {
    element.showActions = !element.showActions;
  }
  editItem(element: any): void {
    console.log('Edit item:', element);
    element.showActions = false;
  }
  deleteItem(element: any): void {
    console.log('Delete item:', element);
    element.showActions = false;
  }
  showEachEmployeeinfo(row: EmployeeDetailsModel) {
    this.router.navigate(['/secure/each-employee-details/basic-details'], { relativeTo: this.route, state: { employee: row } });
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
