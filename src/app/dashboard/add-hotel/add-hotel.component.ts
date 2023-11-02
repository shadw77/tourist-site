
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  hotelForm: FormGroup;
  selectedImage: File | any = null; 
  selectedImages: File[] | any = null;
  
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private hotelCrudService: HotelCrudService
  ){
    this.hotelForm = this.formBuilder.group({
      id:[''],
      name:[''],
      street:[''],
      government:[''],
      description:[''],
      thumbnail:[''],
      creator_id:[''],
      images:[''],
      reviews:[''],

    })
    
  }
  onSubmit() {
    const nameControl = this.hotelForm.get('name');
    const streetControl = this.hotelForm.get('street');
    const governmentControl = this.hotelForm.get('government');
    const descriptionControl = this.hotelForm.get('description');
    const creator_idControl = this.hotelForm.get('creator_id');
    const name = nameControl ? nameControl.value : '';
    const street = streetControl ? streetControl.value : '';
    const government = governmentControl ? governmentControl.value : '';
    const description = descriptionControl ? descriptionControl.value : '';
    const creator_id = creator_idControl ? creator_idControl.value : '';

    const formData = new FormData();
    formData.append('name', name);
    formData.append('street', street);
    formData.append('government', government);
    formData.append('description', description);
    formData.append('creator_id', creator_id);
    
    formData.append('thumbnail', this.selectedImage);
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }
    console.log(this.selectedImages);
    this.hotelCrudService.addHotel(formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        this.hotelForm.reset();
        this.selectedImage = null;
        this.selectedImages = null;
        this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:hotels)')) 
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
