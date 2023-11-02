import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})



export class AddRestaurantComponent {
  restaurantForm: FormGroup;
   selectedImage: File | any = null; 
 selectedImages: File[] | any = null;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
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
      discount:[''],
      rating:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    })
    // onSubmit() {

  }
  onSubmit():any{
    const nameControl = this.restaurantForm.get('name');
  const streetControl = this.restaurantForm.get('street');
    const emailControl = this.restaurantForm.get('email');
  const governmentControl = this.restaurantForm.get('government');
  const descriptionControl = this.restaurantForm.get('description');
  const creator_idControl = this.restaurantForm.get('creator_id');
  const phoneControl = this.restaurantForm.get('phone');
const ratingControl = this.restaurantForm.get(' rating');
  const discount_Control = this.restaurantForm.get('discount');
  const name = nameControl ? nameControl.value : '';
  const email = emailControl ? emailControl.value : '';
  const street = streetControl ? streetControl.value : '';
  const phone = phoneControl ? phoneControl.value : '';
  const rating = ratingControl ? ratingControl.value : '';
  const government = governmentControl ? governmentControl.value : '';
  const description = descriptionControl ? descriptionControl.value : '';
  const creator_id = creator_idControl ? creator_idControl.value : '';
  const discount = discount_Control ? discount_Control.value : '';

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('rating', rating);
  formData.append('street', street);
  formData.append('government', government);
  formData.append('description', description);
  formData.append('creator_id', creator_id);

  formData.append('discount', discount);
  

  formData.append('thumbnail', this.selectedImage);
  for (let i = 0; i < this.selectedImages.length; i++) {
    formData.append('images[]', this.selectedImages[i]);
  }
  console.log(this.selectedImages);
  this.restaurantCrudService.addRestaurant(formData).subscribe(
    (response) => {
      console.log('Data and images saved successfully');
      this.restaurantForm.reset();
      this.selectedImage = null;
      this.selectedImages = null;
      this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:restaurants)')) 
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

