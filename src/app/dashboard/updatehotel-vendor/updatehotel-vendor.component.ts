
import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-updatehotel-vendor',
  templateUrl: './updatehotel-vendor.component.html',
  styleUrls: ['./updatehotel-vendor.component.css']
})
export class UpdatehotelVendorComponent {
  hotelForm: FormGroup;
  selectedImage: File | any = null; ;
  selectedImages: File[] | any = null;;
  getId: any;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private hotelCrudService: HotelCrudService,
    private activatedRoute:ActivatedRoute,
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
  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  // onSubmit(){
  //   // this.hotelCrudService.addHotel(this.hotelForm.value)
  //   // .subscribe(()=>{
  //   //   console.log('Data Added Successfully');
  //   //   this.ngZone.run(()=>this.router.navigateByUrl('/hotel-list')) 
  //   // },(err)=>{
  //   //   console.log(err);
      
  //   // })
  // }
  onSubmit() {
    console.log(this.getId);
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
    if (this.selectedImage) {
      formData.append('thumbnail', this.selectedImage);
    }
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }
     
    console.log(this.selectedImages);
    this.hotelCrudService.updateHotel(this.getId,formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        this.hotelForm.reset();
        this.selectedImage = null;
        this.selectedImages = null;
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
