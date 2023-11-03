import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor() { }
  cartProducts:any[] =[];

  PushCartItems(item:any,quantity:number, type:any){
      const cartItem ={item:item,quantity:quantity, type:type};
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
        sessionStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }
 
  getCartItems() {
    return this.cartProducts;
  }
    retrieveProductsFromSession() {
      const productsString = sessionStorage.getItem('cartProducts');
      if(productsString){
        this.cartProducts = JSON.parse(productsString);
      }
      return this.cartProducts;
    }
   
}
