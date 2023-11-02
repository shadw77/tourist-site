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
      id:[''],
      name:[''],
      email:[''],
      street:[''],
      phone:[''],
      government:[''],
      description:[''],
      rating:[''],
      thumbnail:[''],
      discount:[''],
       creator_id:[''],
      images:[''],
      reviews:[''],

    })
  }
    ngOnInit() {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    }
  
  onSubmit():any{
//     const nameControl = this.restaurantForm.get('name');
//   const streetControl = this.restaurantForm.get('street');
//     const emailControl = this.restaurantForm.get('email');
//   const governmentControl = this.restaurantForm.get('government');
//   const descriptionControl = this.restaurantForm.get('description');
//   const creator_idControl = this.restaurantForm.get('creator_id');
//   const phoneControl = this.restaurantForm.get('phone');
// const ratingControl = this.restaurantForm.get(' rating');
//   const discount_Control = this.restaurantForm.get('discount');
//   const name = nameControl ? nameControl.value : '';
//   const email = emailControl ? emailControl.value : '';
//   const street = streetControl ? streetControl.value : '';
//   const phone = phoneControl ? phoneControl.value : '';
//   const rating = ratingControl ? ratingControl.value : '';
//   const government = governmentControl ? governmentControl.value : '';
//   const description = descriptionControl ? descriptionControl.value : '';
//   const creator_id = creator_idControl ? creator_idControl.value : '';
//   const discount = discount_Control ? discount_Control.value : '';
 
//   const formData = new FormData();

//   formData.append('name', name);
//   formData.append('email', email);
//   formData.append('phone', phone);
//   formData.append('rating', rating);
//   formData.append('street', street);
//   formData.append('government', government);
//   formData.append('description', description);
//   formData.append('creator_id', creator_id);

//   formData.append('discount', discount);
const formData = new FormData();
    formData.append('name', this.restaurantForm.get('name')?.value || '');
    formData.append('email', this.restaurantForm.get('email')?.value || '');
    formData.append('phone', this.restaurantForm.get('phone')?.value || '');
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


}



