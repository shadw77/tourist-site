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
  images: File[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private hotelCrudService: HotelCrudService
  ) {
    this.hotelForm = this.formBuilder.group({
      id: [''],
      name: [''],
      street: [''],
      government: [''],
      description: [''],
      thumbnail: [''],
      creator_id: [''],
      images: [''], // Use this property to store image file(s)
      reviews: [''],
    });
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.images = Array.from(inputElement.files);
    }
  }

  onSubmit(): any {
    const formData = new FormData();
  
    // Append image files to the form data
    for (const image of this.images) {
      formData.append('images[]', image);
    }
  
    // Append other form fields
    for (const key in this.hotelForm.value) {
      formData.append(key, this.hotelForm.value[key]);
    }
  
    this.hotelCrudService.addHotel(formData).subscribe(
      () => {
        console.log('Data Added Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/hotel-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}  