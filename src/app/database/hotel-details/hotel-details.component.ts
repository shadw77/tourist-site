import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

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
      // creator_id:[''],
      images:[''],
      reviews:[''],

    })
    
  }
  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hotelCrudService.getHotel(this.getId).subscribe(response=>{
      console.log(response);
    this.hotelForm.patchValue({
      name: response.data.name,
      government: response.data.government,
      description: response.data.description,
      street: response.data.street,
      thumbnail: response.data.thumbnail,
      images: response.data.images,
      
    });  
  });
  }

  onSubmit() {
    console.log(this.getId);
    const nameControl = this.hotelForm.get('name');
    const streetControl = this.hotelForm.get('street');
    const governmentControl = this.hotelForm.get('government');
    const descriptionControl = this.hotelForm.get('description');
    // const creator_idControl = this.hotelForm.get('creator_id');
    const name = nameControl ? nameControl.value : '';
    const street = streetControl ? streetControl.value : '';
    const government = governmentControl ? governmentControl.value : '';
    const description = descriptionControl ? descriptionControl.value : '';
    // const creator_id = creator_idControl ? creator_idControl.value : '';

    const formData = new FormData();
    formData.append('name', name);
    formData.append('street', street);
    formData.append('government', government);
    formData.append('description', description);
    // formData.append('creator_id', creator_id);
    if (this.selectedImage) {
      formData.append('thumbnail', this.selectedImage);
    }
    // for (let i = 0; i < this.selectedImages.length; i++) {
    //   formData.append('images[]', this.selectedImages[i]);
    // }
     
    console.log(this.selectedImages);
    this.hotelCrudService.updateHotel(this.getId,formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        this.hotelForm.reset();
        this.selectedImage = null;
        this.selectedImages = null;
        console.log(response);
        this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:hotels)')) 
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
