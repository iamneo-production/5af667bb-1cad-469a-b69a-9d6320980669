import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    Username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    cpass: new FormControl('',[Validators.required,Validators.minLength(6)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10)])

  })

  constructor() { }

  ngOnInit(): void {
  }

}