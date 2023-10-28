import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor() { }
  cartProducts:any[] =[];

  PushCartItems(item:any,quantity:number){
      const cartItem ={item:item,quantity:quantity};
       const index=this.cartProducts.find((product)=>{
             return product.item.id==cartItem.item.id;
       }) 
       if(index){
          index.quantity++;
          console.log( index.quantity);
       }
       else{
        this.cartProducts.push(cartItem);
       }
  }
  getCartItems() {
    return this.cartProducts;
  }
}