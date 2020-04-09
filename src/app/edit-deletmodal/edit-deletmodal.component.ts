import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {modalDialogData} from "./../modalData";

@Component({
  selector: 'app-edit-deletmodal',
  templateUrl: './edit-deletmodal.component.html',
  styleUrls: ['./edit-deletmodal.component.css']
})

export class EditDeletmodalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditDeletmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:modalDialogData ) {}

    closeModal(): void {
    this.dialogRef.close();
    };
    deleteEmployee(emp){
          this.dialogRef.close(emp);
    };

    updateEmployee(emp){

          this.dialogRef.close(emp);

    }

  ngOnInit() {
  }

}


