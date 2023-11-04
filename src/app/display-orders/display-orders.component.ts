import { Component } from '@angular/core';
import { UserOrderCrudService } from '../Services/user-order-crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent {
  Orders: any = [];
  userData:any;

  constructor(private userOrderCrudService: UserOrderCrudService,  private http: HttpClient,
    ){}
  
  ngOnInit():void{
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
       this.userData = JSON.parse(userDataString);
    }
      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userData.api_token}`,
    });
      
    this.userOrderCrudService.getAllUserOrders(this.userData.id).subscribe(res=>{        
        this.Orders= res;
        console.log(this.Orders.data);
    });
  }

  delete(id:any, i:any){
    console.log(id);
    this.userOrderCrudService.deleteUserOrder(id).subscribe(res=>{
      this.Orders.splice(i,1);
  })
    
   
  }

}
