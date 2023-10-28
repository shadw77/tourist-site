import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { TripCrudService } from 'src/app/Services/trip-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private tripCrudService: TripCrudService
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.tripCrudService.getTrip(this.getId).subscribe(res=>{
      console.log('dodoooooooooo',res['trip']['id']);

      this.updateForm.setValue({
      id:res['data']['id'],
      name:res['data']['name'],
      government:res['data']['government'],
      duration:res['data']['duration'],
      cost:res['data']['cost'],
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
      government:[''],
      duration:[''],
      cost:[''],
      description:[''],
      rating:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],
    });
    
  }
  onUpdate():any{
    this.tripCrudService.updateTrip(this.getId,this.updateForm.value)
    .subscribe(()=>{
      console.log('Data Updated Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/trips-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
