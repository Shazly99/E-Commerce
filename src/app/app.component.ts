import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private _AuthenticationService:AuthenticationService){
     
    // if (_AuthenticationService.userData.getValue()!=null) {
    //   setInterval(()=>_AuthenticationService.Logout(),1000000000000 )
    // }
  }
  title = 'E_Commerce';
}
