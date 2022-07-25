import { ProductService } from './../product.service';
 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-admin-edition',
  templateUrl: './admin-edition.component.html',
  styleUrls: ['./admin-edition.component.css']
})
export class AdminEditionComponent implements OnInit {
  prodauctData: any[] = [];
  base64: any = '';
  formProduect!:FormGroup;
  formProduectUpdate!:FormGroup
  categories:any;
  select:any=''
  constructor(public _ProductService: ProductService,private _FormBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.formProduect=this._FormBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      category: ['',[Validators.required]]
    })
    
    this.formProduectUpdate=this._FormBuilder.group({
      id:['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      category: ['',[Validators.required]]
    })
    
    this.getAllProduect()
    this.getcategories() 
  }


  getAllProduect() {
    this._ProductService.getAllProduct().subscribe((respond) => {
      this.prodauctData=respond
      console.log(this.prodauctData)
    })
  }
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result; // This is valid
      this.formProduect.get('image')?.setValue(this.base64)
    };
  }
  getcategories(){
    this._ProductService.getcategories().subscribe((responed)=>{
      this.categories=responed
    })

  }
  getSelectCategorie(event:any){
    this.formProduect.get('category')?.setValue(event.target.value)
     

  }
  getNewProduct(formProduect:FormGroup){
    this._ProductService.AddNewProduct(formProduect.value).subscribe((respond)=>{
      console.log(respond)
      alert('Sucess to add new produect')
    })
  }
  clearForm(){
    this.formProduect.patchValue({
      title: '' ,
      price: '',
      description: '',
      image: '',
      category: ''
    })
    this.base64=''
  } 
  idX:any;
  UpdateProduct(event:any){
    this.base64=event.image 
    this.formProduect.get('title')?.setValue(event.title)
    this.formProduect.get('price')?.setValue(event.price)
    this.formProduect.get('description')?.setValue(event.description)
    this.formProduect.get('category')?.setValue(event.category)
    this.formProduect.get('image')?.setValue(event.image)
    this.select=this.formProduect.value.category
    this.idX= event.id

  }
  UpdatedProduct(z:any){
    this.idX
    let a7a=this.prodauctData.find((e)=>{return e.id == this.idX})
    console.log(a7a)

  }


}
