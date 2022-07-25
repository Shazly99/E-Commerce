import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;
  saveUserInfo: any;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    age: new FormControl(null, [Validators.min(15), Validators.max(60), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z0-9]{3,9}$`)])
  })
  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) { }
  submitForm(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._AuthenticationService.signUp(registerForm.value).subscribe((respond) => {

        if (localStorage.getItem("Register") == null) {
          this.saveUserInfo = []
        } else {
          this.saveUserInfo = JSON.parse(localStorage.getItem("Register")!)
        }
        if (respond.message == 'success') {


          this.saveUserInfo.push(registerForm.value)
          localStorage.setItem('Register', JSON.stringify(this.saveUserInfo))


          this._Router.navigate(['login'])

        } else {
          this.error = respond.errors.email.message
        }
      })
    }

  }
  ngOnInit(): void {
  }

}
