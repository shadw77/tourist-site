import { Component } from '@angular/core';
import { HandleapiService } from '../../Services/handleapi.service';
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {
  constructor(private productsService:HandleapiService ,private CounterService:CounterService,
    private router:Router,private cartItems:CartItemService){}
  products:any;
  counter:number=0;
  ngOnInit() {
    this.products= this.productsService.getdata()
            // console.log(this.products);
        //  return this.products= data;
        this.CounterService.get_Counter().subscribe((val)=>{
            this.counter=val;
        });
  }
   redirectTo(item:any,count:number) {
    this.cartItems.PushCartItems(item,count);
    this.router.navigate(['cart'])
  } 
}
