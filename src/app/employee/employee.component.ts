import {Component, Input,SimpleChanges,Output,EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {MatTableDataSource} from '@angular/material';
import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  @Input() employee:Employee;
@Input() employeeList:Employee[];
@Output() actionEdit = new EventEmitter();
@Output() actionDelete = new EventEmitter();
  reportingEmployee:Employee[]=[];
  constructor( private employeeService:EmployeeService) {
  }

  displayedColumns = ['id','Name','Position','Action'];
  dataSource = new MatTableDataSource<Employee>(this.reportingEmployee);
  

  ngOnChanges(changes: SimpleChanges) {
    
    if(this.employee.directReports){
       this.reportingEmployee=this.getreportingEmployee(this.employee.directReports ,this.employeeList,[]);
       this.dataSource = new MatTableDataSource<Employee>(this.reportingEmployee);
      }
  }


getreportingEmployee(ids:number[],employeeList:Employee[],reportingEmployee:Employee[]){
if(ids && ids.length>0){
let n=ids.length,i=0,temp;
  while(reportingEmployee.length<n){
    temp=[...employeeList.filter((emp:{id:Number})=>emp.id==ids[i])];
    if(temp[0] && temp[0].directReports && temp[0].directReports.length>0){
      temp[0].directReports.forEach((tempid)=>{
        if(ids.indexOf(tempid)===-1){
          ids.push(tempid);
          n+=1;
        }
      });
    }
    reportingEmployee.push(...temp);
    i++;
  }
}

return reportingEmployee;

};
actiontoParent(flag,emp){
if(flag){
  this.actionEdit.emit(emp);
}else{
  this.actionDelete.emit(emp);
}
}
}

