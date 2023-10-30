import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurantForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private restaurantCrudService: RestaurantCrudService
  ){
    this.restaurantForm = this.formBuilder.group({
      id:[''],
      name:[''],
      email:[''],
      street:[''],
      phone:[''],
      government:[''],
      description:[''],
      rating:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    })
    
  }
  onSubmit():any{
    this.restaurantCrudService.addRestaurant(this.restaurantForm.value)
    .subscribe(()=>{
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/restaurant-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
