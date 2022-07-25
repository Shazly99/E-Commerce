import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false

  constructor(private _AuthenticationService:AuthenticationService) { 

  
  }

  ngOnInit(): void {
     this._AuthenticationService.userData.subscribe(()=>{
      if (this._AuthenticationService.userData.getValue()!=null) {
        this.isLogin=true
       }else{
        this.isLogin=false
   
      }
    })

  }

  Logout(){
    this._AuthenticationService.Logout()
  }

}
