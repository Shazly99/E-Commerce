import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  prodauctData: any[] = [];
  countItem: number = 0;
  totalPrice: number = 0;
  minusNum: any = '';
  plusNum: any = '';
  sucsess:boolean=false
  constructor(public _CardService:CardService) {}
  ngOnInit(): void {
    this.getProduct_intoCard()
    this.getCartTotal()
  }
  getProduct_intoCard() {
    if ('Card' in localStorage) {
      this.prodauctData = JSON.parse(localStorage.getItem('Card')!)
    }
    this.getCartTotal()
    console.log(this.prodauctData)
  }
  getCartTotal() {
    this.countItem = this.prodauctData.length
    this.totalPrice = 0
    this.prodauctData.forEach((x) => {
      this.totalPrice += Math.floor(x.data.price * x.quantity)
    })
  }
  clearCard() {
    localStorage.removeItem('Card')
    this.prodauctData = []
    this.countItem = 0;
    this.totalPrice = 0
  }
  minus(index: any) {
    this.prodauctData[index].quantity--
    this.getCartTotal()
    localStorage.setItem('Card', JSON.stringify(this.prodauctData))
  }
  plus(index: any) {
    this.prodauctData[index].quantity++
    this.getCartTotal()
    localStorage.setItem('Card', JSON.stringify(this.prodauctData))
  }
  detectchange() {
    this.getCartTotal()
    localStorage.setItem('Card', JSON.stringify(this.prodauctData))
  }

  deleteItem(index: any) {
    this.prodauctData.splice(index, 1)
    localStorage.setItem("Card", JSON.stringify(this.prodauctData))
    this.getCartTotal()
  }

  addCardFromAPI() {
    let products=this.prodauctData.map((e)=>{ return {productId: e.data.id ,quantity:e.quantity} })
    let moduel = { 
      userId: 5,
      date: new Date(),
      products: products
    }
    this._CardService.createNewCard(moduel).subscribe((respond)=>{
      this.sucsess=true
    })
  
  }

  
}
