import {Component, OnInit, NgZone, ChangeDetectionStrategy} from '@angular/core';
import {catchError, map, reduce} from 'rxjs/operators';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditDeletmodalComponent } from './../edit-deletmodal/edit-deletmodal.component';
import {modalDialogData} from "./../modalData";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService,public dialog: MatDialog, private _ngZone:NgZone) {
  }


 
  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.employeeService
    .getAll()
    .pipe(
      reduce((emps, e: Employee) => {
        return emps.concat(e);
      }, []),
      map(emps => (this.employees = emps)),
      catchError(this.handleError.bind(this))
    )
    .subscribe(() => {});
  }


  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve employees';
  }
  
  actionFromChildDel(emp){
    const dialogRef = this.dialog.open(EditDeletmodalComponent, {
      width: '500px',
      data:{"action":false,"emp":emp},
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result && result.id){
      this.employees = this.employees.filter(emp => {
        return emp.id != result.id;
      });
      this.employees.forEach(emp=>{
        if(emp.directReports && emp.directReports.indexOf(result.id)>-1){
          emp.directReports.splice(emp.directReports.indexOf(result.id),1);
        }
      })
      };
    });

  }
  actionFromChildEdit(emp){
    const dialogRef = this.dialog.open(EditDeletmodalComponent, {
      width: '300px',
      data:{"action":true,"emp":emp},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.id){
        this.employeeService.save(result).pipe(catchError(this.handleError.bind(this)))
        .subscribe(() => {
      this.getAllEmployees();
      });
       
        }});
    };
  

}
