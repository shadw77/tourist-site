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
  selectedImage: File | any = null; 
  selectedImages: File[] | any = null;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private tripCrudService: TripCrudService
  ){    
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
  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.tripCrudService.getTrip(this.getId).subscribe(res=>{
    //   this.updateForm.setValue({
    //   id:res['data']['id'],
    //   name:res['data']['name'],
    //   government:res['data']['government'],
    //   duration:res['data']['duration'],
    //   cost:res['data']['cost'],
    //   description:res['data']['description'],
    //   rating:res['data']['rating'],
    //   thumbnail:res['data']['thumbnail'],
    //   // creator_id:res['data']['creator_id'],
    //   // images:res['data']['images'],
    //   // reviews:res['data']['reviews'],
    // });

    // });   
  }
 
  onUpdate(){
   console.log(this.getId);
   console.log(this.selectedImage);
    const formData = new FormData();
    formData.append('name', this.updateForm.value.name);
    formData.append('government', this.updateForm.value.government);
    formData.append('duration', this.updateForm.value.duration);
    formData.append('cost', this.updateForm.value.cost);
    formData.append('description', this.updateForm.value.description);
    formData.append('rating', this.updateForm.value.rating);
    formData.append('creator_id', this.updateForm.value.creator_id);

    formData.append('thumbnail', this.selectedImage);
    this.tripCrudService.updateTrip(this.getId,formData).subscribe(
      (response) => {
        console.log(response);
        console.log('Data and images saved successfully');
        this.updateForm.reset();
        this.selectedImage = null;
        // this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:trips)')) 
      },
      (error) => {
        console.error('Error saving data and images:', error);
      }
    );
  }

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];
    }
  }

  

}
