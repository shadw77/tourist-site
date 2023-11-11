import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TripCrudService } from 'src/app/Services/trip-crud.service';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  tripForm: FormGroup;
  file: any;
  image: any;
  selectedImage: File | any = null; 
  selectedImages: File[] | any = null;
  
  constructor(
    private http: HttpClient,
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private tripCrudService: TripCrudService
  ){
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      government: ['', Validators.required],
      duration: ['', Validators.required],
      cost: ['', Validators.required],
      description: ['', Validators.required,Validators.minLength(10)],
      rating: ['', Validators.required],
      thumbnail: ['', Validators.required],
       images: ['', Validators.required],
       creator_id: ['', Validators.required],
      reviews:['',Validators.required],

    });
    
  }
  imageUpload(event:any){

    this.file = event.target.files[0];
    console.log(this.file);
    if(this.file){
      const reader  = new FileReader;
      reader.onload= (e: any) => {
        this.image = e.target.result;
      }
      reader.readAsDataURL(this.file);
    }
    
    
  }
  onSubmit(){
     const formData = new FormData();
    // formData.append('thumbnail', this.file, this.file.name);
    formData.append('name', this.tripForm.value.name);
    formData.append('government', this.tripForm.value.government);
    formData.append('duration', this.tripForm.value.duration);
    formData.append('cost', this.tripForm.value.cost);
    formData.append('description', this.tripForm.value.description);
    formData.append('rating', this.tripForm.value.rating);
    formData.append('creator_id', this.tripForm.value.creator_id);

    formData.append('thumbnail', this.selectedImage);
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }
    console.log(this.selectedImages);
    this.tripCrudService.addTrip(formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        this.tripForm.reset();
        this.selectedImage = null;
        this.selectedImages = null;
        const role=localStorage.getItem("role");
        if(role === "vendor"){
          this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:trips)'));
        }
        else{
          this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:trips)'));
        }
        
      },
      (error) => {
        console.error('Error saving data and images:', error);
      }
    );
  }

  // onSubmit(): void {
    // const formData = new FormData();
    // formData.append('thumbnail', this.file, this.file.name);
    // formData.append('name', this.tripForm.value.name);
    // formData.append('government', this.tripForm.value.government);
    // formData.append('duration', this.tripForm.value.duration);
    // formData.append('cost', this.tripForm.value.cost);
    // formData.append('description', this.tripForm.value.description);
    // formData.append('rating', this.tripForm.value.rating);
    // formData.append('creator_id', this.tripForm.value.creator_id);
  
  
  //   // Send the image file to the Laravel backend
  //   this.http.post<any>('https://drive.google.com/drive/folders/1RS0LhxJaYAHMHnvYnGIHm3nuKj1MsuPY/',formData).subscribe(
  //     (response) => {
  //       // Handle the response from the backend, if needed
  //       console.log('Image uploaded successfully');
  //       console.log(response);
        
  //       // Now you can proceed to save the trip details
  //       this.tripForm.value.thumbnail = response.filename;
        
  //       this.tripCrudService.addTrip(this.tripForm.value).subscribe(
  //         () => {
  //           console.log('Data Added Successfully');
  //           this.ngZone.run(() => this.router.navigateByUrl('/trips-list'));
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

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
