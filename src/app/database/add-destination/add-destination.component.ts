import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationCrudService } from 'src/app/Services/destination-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {

  destinationForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private  destinationCrudService:  DestinationCrudService
  ){
    this. destinationForm = this.formBuilder.group({
      id:[''],
      name:[''],
      description:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    })
    
  }
  onSubmit():any{
    this. destinationCrudService.addDestination(this. destinationForm.value)
    .subscribe(()=>{
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/destinations-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}