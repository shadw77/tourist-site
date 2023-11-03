import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
import { UserCrudService } from 'src/app/Services/user-crud.service';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';


@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css']
})
export class AddUserOrderComponent {

  userOrderForm: FormGroup;
  users:any=[];
  Hotels:any=[];
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private orderCrudService: UserOrderCrudService,
    private UserCrudService:UserCrudService,
    private HotelCrudService:HotelCrudService
  ){
    this.userOrderForm = this.formBuilder.group({
      id:[''],
      user_id:[''],
      service_id:[''],
      service_type:[''],
    })
    
  }
  ngOnInit(){
    this.UserCrudService.getUsers().subscribe((res)=>{
      this.users=res;
 });
  this.HotelCrudService.getHotels().subscribe((res)=>{
      this.Hotels=res;
 });
  }
  onSubmit():any{
    const formData = new FormData();
    formData.append('user_id', this.userOrderForm.value.user_id);
    formData.append('service_id', this.userOrderForm.value.service_id);
    formData.append('service_type', this.userOrderForm.value.service_type);
    this.orderCrudService.addUserOrder(formData).subscribe((res)=>{  
      console.log('Data Added Successfully');
       this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:user-orders)')) 
    },(err)=>{
      console.log(err);  
    });
  }


}
