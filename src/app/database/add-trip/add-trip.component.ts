import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TripCrudService } from 'src/app/Services/trip-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  
  constructor(
    private http: HttpClient,
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private tripCrudService: TripCrudService
  ){
    this.tripForm = this.formBuilder.group({
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

    })
    
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
  // onSubmit():any{
  //   //
  //   // this.tripForm.value.thumbnail = this.file;
  //   const formData = new FormData();
  //   formData.append('thumbnail', this.file, this.file.name);
    
  //   this.tripCrudService.addTrip(this.tripForm.value)
  //   .subscribe(()=>{
  //     console.log('Data Added Successfully');
  //     this.ngZone.run(()=>this.router.navigateByUrl('/trips-list')) 
  //   },(err)=>{
  //     console.log(err);
      
  //   })
  // }
  onSubmit(): void {
    const formData = new FormData();
    formData.append('thumbnail', this.file, this.file.name);
    formData.append('name', this.tripForm.value.name);
    formData.append('government', this.tripForm.value.government);
    formData.append('duration', this.tripForm.value.duration);
    formData.append('cost', this.tripForm.value.cost);
    formData.append('description', this.tripForm.value.description);
    formData.append('rating', this.tripForm.value.rating);
    formData.append('creator_id', this.tripForm.value.creator_id);
  
  
    // Send the image file to the Laravel backend
    this.http.post<any>('https://drive.google.com/drive/folders/1RS0LhxJaYAHMHnvYnGIHm3nuKj1MsuPY/',formData).subscribe(
      (response) => {
        // Handle the response from the backend, if needed
        console.log('Image uploaded successfully');
        console.log(response);
        
        // Now you can proceed to save the trip details
        this.tripForm.value.thumbnail = response.filename;
        
        this.tripCrudService.addTrip(this.tripForm.value).subscribe(
          () => {
            console.log('Data Added Successfully');
            this.ngZone.run(() => this.router.navigateByUrl('/trips-list'));
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
