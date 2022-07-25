import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _HttpClient:HttpClient) { }

  createNewCard(module:any){
    return this._HttpClient.post(`https://fakestoreapi.com/carts`,module)
  }

  getAllCard():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/carts')
  }

  ParamesData(param?:any){
    let params=new HttpParams();
    params=params.append('startDate',param?.StartData).append('endDate',param?.EndData)
    return this._HttpClient.get('https://fakestoreapi.com/carts',{params})

  }

  deleteCard(id:number){
    return this._HttpClient.delete('https://fakestoreapi.com/carts/'+id)
  }
}
