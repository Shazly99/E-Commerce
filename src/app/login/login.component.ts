import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
AuthenticationService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:any;
  userDataEncode:any=null;

  LoginForm:FormGroup=new FormGroup({
    email: new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z0-9]{3,9}$`)])
  })
  constructor(private _AuthenticationService:AuthenticationService,public _Router:Router) { }
  SubmitLogin(LoginForm:FormGroup){
    if (LoginForm.valid) {
      this._AuthenticationService.signIn(LoginForm.value).subscribe((respond)=>{
        if (respond.message=='success') {
          localStorage.setItem('Token',respond.token)
          this._Router.navigate(['Product'])
          this.userDataEncode= this._AuthenticationService.saveData()
        }else{
          this.error=respond.message
        }
      })    
    }

  }
  ngOnInit(): void {
  }

}
