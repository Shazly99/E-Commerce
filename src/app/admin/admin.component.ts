import { ProductService } from './../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cards:any[]=[]
  details:any ;
   date:any;
   products:any[]=[];
  FormData:FormGroup=new FormGroup({
    StartData:new FormControl(null),
    EndData:new FormControl(null)
  })
  ngOnInit(): void {
    this.getAllCards()
  }
  constructor(private _CardService:CardService,private _ProductService:ProductService){}
  getAllCards(){
    this._CardService.getAllCard().subscribe((respond)=>{
      this.cards=respond
    })
  }
  applyFilter(){
    let data=this.FormData.value
    this._CardService.ParamesData(data).subscribe((responed)=>{
      })
   }
  deleteCard(id:number){
    this._CardService.deleteCard(id).subscribe((respond)=>{
      this.getAllCards()
      alert('Card Delete Success')
    })
  }
  view(i:number){
    this.products=[]
    this.details=this.cards[i] 
    for (let x in this.details.products ) {
      this._ProductService.getProductsDetalis(this.details.products[x].productId).subscribe((res)=>{
        this.products.push({item:res, quantity:this.details.products[x].quantity})
      })

    }
    console.log(this.products)

  }
}
