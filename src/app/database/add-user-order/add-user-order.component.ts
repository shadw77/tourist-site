import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css']
})
export class AddUserOrderComponent {

  userOrderForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private orderCrudService: UserOrderCrudService
  ){
    this.userOrderForm = this.formBuilder.group({
      id:[''],
      user_id:[''],
      service_id:[''],
      service_type:[''],
    })
    
  }
  onSubmit():any{
    this.orderCrudService.addUserOrder(this.userOrderForm.value)
    
    .subscribe(()=>{  
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/users-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
