import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

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
  

  onSubmit(): any {
    this.markFormGroupTouched(this.restaurantForm);

    if (this.restaurantForm.valid) {
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
      for (let i = 0; i < this.selectedImages.length; i++) {
        formData.append('images[]', this.selectedImages[i]);
      }

      this.restaurantCrudService.addRestaurant(formData).subscribe(
        (response) => {
          console.log('Data and images saved successfully');
          this.restaurantForm.reset();
          this.selectedImage = null;
          this.selectedImages = null;
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