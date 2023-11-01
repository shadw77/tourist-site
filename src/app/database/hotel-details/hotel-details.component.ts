import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private hotelCrudService: HotelCrudService 
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hotelCrudService.getHotel(this.getId).subscribe(res=>{
      console.log(res);

      this.updateForm.setValue({

      id:res['data']['id'],
      name:res['data']['name'],
      government:res['data']['government'],
      street:res['data']['street'],
      description:res['data']['description'],
      thumbnail:res['data']['thumbnail'],
      creator_id:res['data']['creator_id'],
      images:res['data']['images'],
      reviews:res['data']['reviews'],

    });
    });   
    this.updateForm = this.formBuilder.group({
      id:[''],
      name:[''],
      street:[''],
      government:[''],
      description:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    });
    
  }
  onUpdate():any{
    this.hotelCrudService.updateHotel(this.getId,this.updateForm.value)
    .subscribe(()=>{
      console.log('Data Updated Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/hotels-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
