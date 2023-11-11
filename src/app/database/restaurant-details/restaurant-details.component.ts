import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})

export class RestaurantDetailsComponent {

  restaurantForm: FormGroup;
  selectedImage: File | any = null; ;
 selectedImages: File[] | any = null;;
   getId: any;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private restaurantCrudService: RestaurantCrudService 
  ){   
    
    

    
    this.restaurantForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.maxLength(255)]],
      phone: ['', [Validators.required]],
      government: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      cost: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      thumbnail: [''],
      discount: ['', [Validators.required]],
      creator_id: ['', [Validators.required]],
      images: [''],
      reviews: [''],
    });
  }
    ngOnInit() {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.restaurantCrudService.getRestaurant(this.getId).subscribe(response=>{
        console.log(response);
      this.restaurantForm.patchValue({
        name: response.data.name,
        government: response.data.government,
        rating: response.data.rating,
        email: response.data.email,
        street: response.data.street,
        description: response.data.description,
        phone: response.data.phone,
        cost: response.data.cost,
        discount: response.data.discount,
        thumbnail: response.data.thumbnail,
        images: response.data.images,
        
      });  
    });
      this.fetchRestaurantData(this.getId);
    }
  
    fetchRestaurantData(id: string) {
      this.restaurantCrudService.getRestaurant(id).subscribe(
        (data) => {
          this.restaurantForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching restaurant data:', error);
        }
      );
    }
  
  onSubmit():any{

const formData = new FormData();
    formData.append('name', this.restaurantForm.get('name')?.value || '');
    formData.append('email', this.restaurantForm.get('email')?.value || '');
    formData.append('phone', this.restaurantForm.get('phone')?.value || '');
    formData.append('cost', this.restaurantForm.get('cost')?.value || '');
    formData.append('rating', this.restaurantForm.get('rating')?.value || '');
    formData.append('street', this.restaurantForm.get('street')?.value || '');
    formData.append('government', this.restaurantForm.get('government')?.value || '');
    formData.append('description', this.restaurantForm.get('description')?.value || '');
    formData.append('creator_id', this.restaurantForm.get('creator_id')?.value || '');
    formData.append('discount', this.restaurantForm.get('discount')?.value || '');

  
  if (this.selectedImage) {
    formData.append('thumbnail', this.selectedImage);
  }
  // for (let i = 0; i < this.selectedImages.length; i++) {
  //   formData.append('images[]', this.selectedImages[i]);
  // }
   
  console.log(this.selectedImages);
  this.restaurantCrudService.updateRestaurant(this.getId,formData).subscribe(
    (response) => {
      console.log('Data and images saved successfully');
      this.restaurantForm.reset();
      this.selectedImage = null;
      this.selectedImages = null;
      console.log(response);
      const role=localStorage.getItem("role");
      if(role === "vendor"){
        this.ngZone.run(() => this.router.navigateByUrl('dashboard/vendor/(details:restaurants)'));
      }
      else{
        this.ngZone.run(() => this.router.navigateByUrl('dashboard/admin/(details:restaurants)'));
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

