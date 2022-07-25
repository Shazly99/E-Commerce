import { ProductService } from './../product.service';
import { ActivatedRoute,  } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.css']
})
export class ProductsDetalisComponent implements OnInit {
  id:any;
  data:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService) { }

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.getProductsDetalis()
  }

  getProductsDetalis(){
    this._ProductService.getProductsDetalis(this.id).subscribe((respond)=>{
      this.data=respond
      console.log(this.data)
    })
  }
}
