import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient ) { }

  getAllProduct():Observable<any>
  {
    return this._HttpClient.get(environment.baseApi+ `products`)
  }

  getcategories():Observable<any>
  {
    return this._HttpClient.get(environment.baseApi+`products/categories`)
  }

  getProductByCategories(valueCategory:any):Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${valueCategory}`)
  }

  getProductsDetalis(id:any):Observable<any>
  {
    return this._HttpClient.get(environment.baseApi+`products/`+id)
  }

  AddNewProduct(formProduect:any):Observable<any> {
    return this._HttpClient.post(`https://fakestoreapi.com/products`,{formProduect})
  }
  updateProduct(formProduect:any):Observable<any> {
    return this._HttpClient.put( `https://fakestoreapi.com/${formProduect.id}`,formProduect)
  }

 
}
