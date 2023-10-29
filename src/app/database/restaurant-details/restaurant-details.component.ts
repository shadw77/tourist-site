import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private restaurantCrudService: RestaurantCrudService 
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurantCrudService.getRestaurant(this.getId).subscribe(res=>{
      console.log(res);

      this.updateForm.setValue({

      id:res['data']['id'],
      name:res['data']['name'],
      email:res['data']['email'],
      government:res['data']['government'],
      street:res['data']['street'],
      phone:res['data']['phone'],
      description:res['data']['description'],
      rating:res['data']['rating'],
      thumbnail:res['data']['thumbnail'],
      creator_id:res['data']['creator_id'],
      images:res['data']['images'],
      reviews:res['data']['reviews'],

    });
    });   
    this.updateForm = this.formBuilder.group({
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

    });
    
  }
  onUpdate():any{
    this.restaurantCrudService.updateRestaurant(this.getId,this.updateForm.value)
    .subscribe(()=>{
      console.log('Data Updated Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/restaurants-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
