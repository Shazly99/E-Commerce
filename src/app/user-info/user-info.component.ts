import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:any;
  constructor() { }
  
  ngOnInit(): void {
    this.userInfo=JSON.parse(localStorage.getItem('Register')!)
    console.log(this.userInfo)
  }

}
