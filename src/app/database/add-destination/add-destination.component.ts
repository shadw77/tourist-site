import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationCrudService } from 'src/app/Services/destination-crud.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {

  destinationForm: FormGroup;
   selectedImage: File | any = null; 
 selectedImages: File[] | any = null;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private  destinationCrudService:  DestinationCrudService
  ){
    this. destinationForm = this.formBuilder.group({
     
        id:[''],
        name: ['', [Validators.required, Validators.maxLength(255)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        thumbnail:['', [Validators.required]],
        creator_id:['', [Validators.required]],
        rating:[''],
        images:['', [Validators.required]],
        reviews:[''],
  
      })
      
    }
      
  onSubmit():any{
    this.markFormGroupTouched(this.destinationForm);

    if (this.destinationForm.valid) {
  const formData = new FormData();
    formData.append('name', this.destinationForm.get('name')?.value || '');
    formData.append('rating', this.destinationForm.get('rating')?.value || '5');
    formData.append('description', this.destinationForm.get('description')?.value || '');
    formData.append('creator_id', this.destinationForm.get('creator_id')?.value || '');
  
    formData.append('thumbnail', this.selectedImage);
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }
    console.log(this.selectedImages);
    this.destinationCrudService.addDestination(formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        console.log(formData);
      
        this.destinationForm.reset();
        this.selectedImage = null;
        this.selectedImages = null;
        const role=localStorage.getItem("role");
        if(role === "vendor"){
          this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:destinations)')) 
        }
        else{
          this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:destinations)')) 
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
  