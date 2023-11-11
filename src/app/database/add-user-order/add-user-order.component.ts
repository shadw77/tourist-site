import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
import { UserCrudService } from 'src/app/Services/user-crud.service';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css']
})
export class AddUserOrderComponent {

  userOrderForm: FormGroup;
  users:any=[];
  Hotels:any=[];
  time_slot:number=1;
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
//  const hotels$ =this.HotelCrudService.getHotels().pipe(
//   map((hotels: any[]) => hotels.map((hotel: any) => ({ ...hotel, type: "Hotel" })))
// );

// const trips$ = this.getDiscountedTrips().pipe(
//   map((trips: any[]) => trips.map((trip: any) => ({ ...trip, type: "Trip" })))
// );

// const restaurants$ = this.getDiscountedRestaurants().pipe(
//   map((restaurants: any[]) => restaurants.map((restaurant: any) => ({ ...restaurant, type: "Restaurant" })))
// );

// forkJoin([hotels$, trips$, restaurants$]).subscribe(([hotels, trips, restaurants]) => {
//   this.discountedItems = [...hotels, ...trips, ...restaurants];
// });
  }
  onSubmit():any{
    if(sessionStorage.getItem('time_slot')){
    this.time_slot = Number(sessionStorage.getItem('time_slot'));}
    const formData = new FormData();
    formData.append('user_id', this.userOrderForm.value.user_id);
    formData.append('service_id', this.userOrderForm.value.service_id);
    formData.append('service_type', this.userOrderForm.value.service_type);
    this.orderCrudService.addUserOrder(formData,this.time_slot).subscribe((res)=>{  
      console.log('Data Added Successfully');
       this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:user-orders)')) 
    },(err)=>{
      console.log(err);  
    });
  }


}
