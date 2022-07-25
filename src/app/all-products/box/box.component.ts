import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  // send data parent to chiled
  @Input() item: any = {}
  // send data chiled to parent 
  @Output() data=new EventEmitter()
  addBtn:boolean=false
  amount:number=0
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.data.emit({data:this.item,quantity:this.amount} )
   }


}


 