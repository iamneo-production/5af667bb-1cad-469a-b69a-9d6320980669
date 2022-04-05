import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {MatDialogRef , MAT_DIALOG_DATA} from "@angular/material/dialog"


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
EmployeeForm!: FormGroup;
actionBtn: string ="Add"
  constructor(private formBuilder : FormBuilder,private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData :any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.EmployeeForm=this.formBuilder.group({
      name : ['',Validators.required],
     Role: ['',Validators.required],
      Email : ['',Validators.required],
      Password : ['',Validators.required],
      Experience :['',Validators.required]

    });

  if(this.editData){
    this.actionBtn="Update";
    this.EmployeeForm.controls['name'].setValue(this.editData.name)
    this.EmployeeForm.controls['Role'].setValue(this.editData.Role)
    this.EmployeeForm.controls['Email'].setValue(this.editData.Email)
    this.EmployeeForm.controls['Password'].setValue(this.editData.Password)
    this.EmployeeForm.controls['Expereince'].setValue(this.editData.Expereince)

  }
}
  
addEmployee(){
 if(!this.editData){
  if(this.EmployeeForm.valid){
    this.api.postProduct(this.EmployeeForm.value)
    .subscribe({
      next:(res)=>{
        alert("Employee added successfully");
        this.EmployeeForm.reset();
        this.dialogRef.close("Added");
      },
      error:()=>{
        alert("Error while adding")
      }
    })
  }
 }else{
  this.updateEmployee()
 }
}
updateEmployee(){
 this.api.putEmployee(this.EmployeeForm.value,this.editData.id)
 .subscribe({
   next:(res)=>{
     alert("Employee updated successfully");
     this.EmployeeForm.reset();
     this.dialogRef.close("update");
   },
   error:()=>{
     alert("Error while updating the record");
   }
 })
}
}
