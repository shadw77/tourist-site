import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TripCrudService } from 'src/app/Services/trip-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  tripForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private tripCrudService: TripCrudService
  ){
    this.tripForm = this.formBuilder.group({
      name:[''],
      government:[''],
      duration:[''],
      cost:[''],
      description:[''],
      rating:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    })
    
  }
  onSubmit():any{
    this.tripCrudService.addTrip(this.tripForm.value)
    .subscribe(()=>{
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/trips-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
