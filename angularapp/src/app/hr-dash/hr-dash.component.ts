import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { hrData } from './hr.model';

@Component({
  selector: 'app-hr-dash',
  templateUrl: './hr-dash.component.html',
  styleUrls: ['./hr-dash.component.css']
})
export class HrDashComponent implements OnInit {

  formValue!:FormGroup
  hrModelObj :hrData = new hrData;
  allHrData: any;
  constructor(private formBuilder:FormBuilder , private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      image:[''],
      experience:[''],
      date:[''],
      salary:['']
    })
    this.getAllData()
  }
  addHr(){
    this.hrModelObj.name = this.formValue.value.name;
    this.hrModelObj.image = this.formValue.value.image;
    this.hrModelObj.experience = this.formValue.value.experience;
    this.hrModelObj.date = this.formValue.value.date;
    this.hrModelObj.salary = this.formValue.value.salary;

    this.api.postHr(this.hrModelObj).subscribe(res=>{
      console.log(res);
      alert("Hr Record Taken sucessfully");
      //clear fill form data 0
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();
    },
    err=>{
      alert("error occur")
    }
    )
  }

  //Get all data
  getAllData(){
    this.api.getHr().subscribe(res=>{
      this.allHrData = res;
    })
  }
  //Delete record
  deleteHr(data:any){
    this.api.deleteHr(data.id).subscribe(res=>{
      alert("Record Deleted")
      this.getAllData();
    })
  }
}
