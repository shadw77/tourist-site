import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DestinationCrudService } from 'src/app/Services/destination-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private destinationCrudService: DestinationCrudService
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.destinationCrudService.getDestination(this.getId).subscribe(res=>{
      console.log(res);

      this.updateForm.setValue({

      id:res['data']['id'],
      name:res['data']['name'],
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
      description:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    });
    
  }
  onUpdate():any{
    this.destinationCrudService.updateDestination(this.getId,this.updateForm.value)
    .subscribe(()=>{
      console.log('Data Updated Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/destinations-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }

}