import { Component } from '@angular/core';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'

import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent {
    constructor(private cartItems:CartItemService,private location: Location,private CounterService:CounterService){}
    cartProducts:any[]=[];
   
    totalPrice:number=0;
    counter:number=0;
    subtotal:number=0;
    selectedOption:string='';
    ngOnInit() {
     this.cartProducts=this.cartItems.retrieveProductsFromSession();
     for(let i=0;i<this.cartProducts.length;i++){
          this.subtotal=this.cartProducts[i].quantity * this.cartProducts[i].item.cost
         this.totalPrice+=this.subtotal;
          }
      this.CounterService.get_Counter().subscribe((val)=>{
        this.counter=val;
      });
      this.CounterService.set_Counter(this.cartProducts.length);
    }

    removeProductsFromSession(cart:any) {
      this.cartProducts.splice(this.cartProducts.indexOf(cart), 1);
       sessionStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
        this.CounterService.set_Counter(this.counter -= cart.quantity)
        this.totalPrice-=cart.item.cost * cart.quantity;
      // sessionStorage.removeItem('cartProducts');
    }
    goBack() {
      this.location.back();
    }
    onOptionChange(event: any,cart:any) {
      this.selectedOption = event.target.value;
      cart.quantity=this.selectedOption;
      console.log(this.selectedOption);
      sessionStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    }
    
}
