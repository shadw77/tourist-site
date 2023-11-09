import { Component } from '@angular/core';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {
  Orders: any = [];
  
  constructor(private userOrderCrudService: UserOrderCrudService){}
  ngOnInit():void{
    this.userOrderCrudService.getUserOrders().subscribe(res=>{        
        this.Orders= res;
        // console.log(this.Orders.data);
    });
  }

  delete(id:any, i:any){
    console.log(id);
    this.userOrderCrudService.deleteUserOrder(id).subscribe(res=>{
      this.userOrderCrudService.getUserOrders().subscribe(res=>{        
        this.Orders= res;
        // console.log(this.Orders.data);
    });
  });
    
   
  }
   
  isAdmin(): boolean {
    const user =localStorage.getItem('role');
    return user=== 'admin';
  }

  isVendor(): boolean {
    const user = localStorage.getItem('role');
    return  user === 'vendor';
  }
}
