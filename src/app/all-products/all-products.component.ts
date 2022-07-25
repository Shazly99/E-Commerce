import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
 
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  error: any = null;
  categories: any[] = []
  Product:Product[] = []
  valueCategory: any;
  cardProduct:any[]=[]
  loaing: boolean = false
  constructor(private _ProductService: ProductService) { }



  ngOnInit(): void {
    this.getAllProduct()
    this.getcategories()
  }


  filterCategory(event: any) {
    this.loaing = true
    this.valueCategory = event.target.value
    if (this.valueCategory == 'all') {
      this.getAllProduct()
    } else {
      this.getProductByCategories()
    }
  }
  getAllProduct() {
    this.loaing = true
    this._ProductService.getAllProduct().subscribe((respond) => {
      this.loaing = false
      this.Product = respond;
    }, (error) => {
      this.error = error.message
    }, () => {
    }
    )
  }
  getcategories() {
    this.loaing = true
    this._ProductService.getcategories().subscribe((respond) => {
      this.loaing = false
      this.categories = respond
    })
  }
  getProductByCategories() {
    this.loaing = true
    this._ProductService.getProductByCategories(this.valueCategory).subscribe((respond) => {
      this.loaing = false
      this.Product = respond

    })
  }

  addToCard(event:any){
    if ('Card' in localStorage) {
      this.cardProduct=JSON.parse(localStorage.getItem('Card')!)

      let exist=this.cardProduct.find(item=>item.data.id== event.data.id)
      if (exist) {
        alert('Opps! This Products is already added to the Card  ')
      }else{
        this.cardProduct.push(event)
        localStorage.setItem('Card' , JSON.stringify(this.cardProduct))

      }

    }
    else{
      this.cardProduct.push(event)
      localStorage.setItem('Card' , JSON.stringify(this.cardProduct))
    }
  }
}
