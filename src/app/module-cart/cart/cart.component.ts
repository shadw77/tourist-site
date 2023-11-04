import { Component } from '@angular/core';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
import {jwtDecode} from 'jwt-decode';

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
    discount:number=0;
    selectedOption:string='';
    imagePath: string = '';
    imagePaths:any;
    tokenExpired:any;

    ngOnInit() {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
         this.userData = JSON.parse(userDataString);
      }
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userData.api_token}`,
      });
            if (this.isTokenExpired(this.userData.api_token)) {
        console.log('Token is expired.');
        this.tokenExpired = true;
      } else {
        console.log('Token is valid.');
      }    

     this.cartProducts=this.cartItems.retrieveProductsFromSession();
     this.subtotal=0;
     for(let i=0;i<this.cartProducts.length;i++){
          this.subtotal+=Number(this.cartProducts[i].quantity) * Number(this.cartProducts[i].item.cost);
          console.log(this.cartProducts[i].item);
          
          this.discount += Number(this.cartProducts[i].item.discount);
          }          
          this.totalPrice+=(this.subtotal- Number(this.discount));

      this.CounterService.get_Counter().subscribe((val)=>{
        this.counter=val;
      });
      this.CounterService.set_Counter(this.cartProducts.length);
      this.imagePaths=  {
          Hotel: 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/',
          Restaurant: 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/',
          Trip: 'http://127.0.0.1:8000/images/trip_images/thumbnails/',
          Destination: 'http://127.0.0.1:8000/images/destination_images/thumbnails/'
        };
      for (let i = 0; i < this.cartProducts.length; i++) {
        const currentProductType = this.cartProducts[i].type;
        const currentImagePath = this.imagePaths[currentProductType]; 
        this.imagePath = currentImagePath;
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
    isTokenExpired(token: string): boolean {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        if (decodedToken.exp !== undefined) {
          return decodedToken.exp < currentTime;
        } else {
          return false;
        }
      } catch (error) {
        this.tokenExpired = true;
        return true; 
      }
    }
    
    checkout() {
      
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
         this.userData = JSON.parse(userDataString);
      }
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userData.api_token}`,
      });
      console.log(this.userData.api_token);
      if (this.isTokenExpired(this.userData.api_token)) {
        console.log('Token is expired.');
      } else {
        console.log('Token is valid.');
      }    

      
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
