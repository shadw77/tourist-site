import { Component } from '@angular/core';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'

import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent {

    constructor(
      private http: HttpClient,
      private cartItems:CartItemService,private location: Location,private CounterService:CounterService){}
    cartProducts:any[]=[];
    userData:any;

    totalPrice:number=0;
    counter:number=0;
    subtotal:number=0;
    selectedOption:string='';
    imagePath: string = '';

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
      for(let i=0; i<= this.cartProducts.length ; i++){
        if(this.cartProducts[i].type === 'Hotel'){
            this.imagePath='http://127.0.0.1:8000/images/Hotel_images/thumbnails/'           
        }
        else if(this.cartProducts[i].type === 'Restaurant'){
          this.imagePath='http://127.0.0.1:8000/images/Restaurant_images/thumbnails/'
        } 
        else if(this.cartProducts[i].type === 'Trip'){
          this.imagePath='http://127.0.0.1:8000/images/trip_images/thumbnails/'
        }
        else{
        this.imagePath='http://127.0.0.1:8000/images/Destination_images/thumbnails/'
        }
      }
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

    checkout() {
      // Assuming you have a service to retrieve the logged-in user's data
      // const user = this.userService.getUserData(); // Replace with actual code
    
      
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
         this.userData = JSON.parse(userDataString);
      }
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userData.api_token}`,
      });
      
      if (this.userData)
       {
        
        const orderData = {
          cartProducts: this.cartProducts,
        };

        this.http.post('http://127.0.0.1:8000/api/checkout', orderData,  { headers }).subscribe(
          (response) => {
            console.log('ordered successfully');
            
            this.cartProducts = [];
            sessionStorage.removeItem('cartProducts');
            this.CounterService.set_Counter(0);
          },
          (error) => {
            console.error('Checkout failed', error);
          }
        );
      }
    
}
}
