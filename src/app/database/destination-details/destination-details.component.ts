import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DestinationCrudService } from 'src/app/Services/destination-crud.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent {

 selectedImage: File | any = null; ;
selectedImages: File[] | any = null;;
 getId: any;
  destinationForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private destinationCrudService: DestinationCrudService
  ){    
   
    this.destinationForm = this.formBuilder.group({
      id:[''],
        name: ['', [Validators.required, Validators.maxLength(255)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        thumbnail:['', [Validators.required]],
        creator_id:['', [Validators.required]],
        rating:[''],
        images:['', [Validators.required]],
        reviews:[''],
  

    });
    
  }
  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.destinationCrudService.getDestination(this.getId).subscribe(response=>{
      console.log(response);
    this.destinationForm.patchValue({
      name: response.destination.name,
      rating: response.destination.rating,
      description: response.destination.description,
      thumbnail: response.destination.thumbnail,
      creator_id: response.destination.creator_id,
      images: response.destination.images,
      
    });  
  });
         this.fetchDestinationData(this.getId);
        }
      
        fetchDestinationData(id: string) {
          this.destinationCrudService.getDestination(id).subscribe(
            (data) => {
              this.destinationForm.patchValue(data);
            },
            (error) => {
              console.error('Error fetching restaurant data:', error);
            }
          );
        }
onSubmit():any{

const formData = new FormData();
  formData.append('name', this.destinationForm.get('name')?.value || '');
  formData.append('rating', this.destinationForm.get('rating')?.value || '');
  formData.append('description', this.destinationForm.get('description')?.value || '');
  formData.append('creator_id', this.destinationForm.get('creator_id')?.value || '');


if (this.selectedImage) {
  formData.append('thumbnail', this.selectedImage);
}

console.log(this.selectedImages);
this.destinationCrudService.updateDestination(this.getId,formData).subscribe(
  (response) => {
    console.log('Data and images saved successfully');
    this.destinationForm.reset();
    this.selectedImage = null;
    this.selectedImages = null;
    console.log(response);
    const role=localStorage.getItem("role");
    if(role === "vendor"){
      this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:destinations)')) ;
    }
    else{
      this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:destinations)')) ; 
       }
   
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

onImagesChange(event: Event) {
const inputElement = event.target as HTMLInputElement;
if (inputElement.files && inputElement.files.length > 0) {
  this.selectedImages = Array.from(inputElement.files);
}
}

markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach((control) => {
    control.markAsTouched();

    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}
}

