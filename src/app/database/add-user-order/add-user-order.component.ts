import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
import { UserCrudService } from 'src/app/Services/user-crud.service';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { TripCrudService } from 'src/app/Services/trip-crud.service';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css']
})
export class AddUserOrderComponent {

  userOrderForm: FormGroup;
  users: any[] = [];
  Hotels:any=[];
  trips:any=[];
  restaurants:any=[];
  services:any=[];
  filterServices:any=[];
  time_slot:number=1;
  service:any='';
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private orderCrudService: UserOrderCrudService,
    private UserCrudService:UserCrudService,
    private HotelCrudService:HotelCrudService,
    private TripCrudService:TripCrudService,
    private RestaurantCrudService:RestaurantCrudService
  ){
    this.userOrderForm = this.formBuilder.group({
      id:[''],
      user_id:[''],
      service_id:[''],
      service_type:[''],
      quantity:['']
    })
    
  }
  ngOnInit(){
    this.UserCrudService.getUsers().subscribe((res:any)=>{
        this.users =res.data.filter((user: any) => user.role === "user");
       });
   this.orderCrudService.getServices().subscribe((res:any)=>{
    this.filterServices=res;
     this.services=this.filterServices;
      console.log(this.services.length)
   });

  }
  filterService(value:any){
      this.services=this.filterServices.filter((item:any)=>{
        return  item.type == value;
      });
  }
  onSubmit(): any {
    if (sessionStorage.getItem('time_slot')) {
      this.time_slot = Number(sessionStorage.getItem('time_slot'));
    }
  
    const formData = new FormData();
    formData.append('user_id', this.userOrderForm.value.user_id);
    formData.append('service_id', this.userOrderForm.value.service_id);
    formData.append('service_type', this.userOrderForm.value.service_type);
    formData.append('quantity', this.userOrderForm.value.quantity);
    this.service =this.services[this.userOrderForm.value.service_id].cost * this.userOrderForm.value.quantity
    formData.append('amount', this.service);
    if (this.service) {
      // formData.append('amount', service.cost);
      this.orderCrudService.addUserOrder(formData, this.time_slot).subscribe((res) => {
        console.log('Data Added Successfully');
        const role = localStorage.getItem('role');
        if (role === 'vendor') {
          this.ngZone.run(() => this.router.navigateByUrl('dashboard/vendor/(details:user-orders)'));
        } else {
          this.ngZone.run(() => this.router.navigateByUrl('dashboard/admin/(details:user-orders)'));
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      console.log('Service not found');
    }
  }
  

}
