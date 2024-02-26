import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  constructor(private accountService:AccountService,private router:Router){}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(){

    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(() => {
     this.router.navigateByUrl('/shop')
    },err =>{
      console.log(err)
    })
  }

}
