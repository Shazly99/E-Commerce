import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // user:any=null
   constructor(public _HttpClient:HttpClient,public _Router:Router) { 
    if (localStorage.getItem('Token')!=null) {
      this.saveData()
    }
   }
  signUp(FormData:any):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup` ,FormData)
  }
  signIn(FormData:any):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,FormData)
  }

  userData=new BehaviorSubject(null);
  saveData()
  {
    let encodeduserdata=JSON.stringify(localStorage.getItem('Token'))
    this.userData.next(jwtDecode(encodeduserdata)) 
    console.log(this.userData)
  }
  Logout(){
    localStorage.removeItem('Token')
    this.userData.next(null)
    this._Router.navigate(['login'])
  }
}
