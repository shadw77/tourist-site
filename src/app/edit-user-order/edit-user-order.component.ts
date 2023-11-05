import { Component } from '@angular/core';
import { UserOrderCrudService } from '../Services/user-order-crud.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user-order',
  templateUrl: './edit-user-order.component.html',
  styleUrls: ['./edit-user-order.component.css']
})
export class EditUserOrderComponent {

  userData:any;
  Order:any;
  selectedOption:any;
  id: any;
  constructor(private route: ActivatedRoute,private userOrderCrudService: UserOrderCrudService){}
  ngOnInit():void{
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
       this.userData = JSON.parse(userDataString);
    }
      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userData.api_token}`,
    });

    this.route.params.subscribe(params => {
       this.id = params['id'];

  this.userOrderCrudService.getUserOrder(this.id).subscribe(res => {        
    this.Order = res;

  });  
    


    });
    

  }
  save(event: any) {
    this.selectedOption = event.target.value;    
    this.Order.data.quantity = this.selectedOption;
    this.userOrderCrudService.updateUserOrder(this.id, this.Order.data).subscribe(()=>{
      console.log('Data Updated Successfully');
    },(err)=>{
      console.log(err);
      
    })

  }
}
