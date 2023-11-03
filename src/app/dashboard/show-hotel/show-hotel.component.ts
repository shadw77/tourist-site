import { Component,ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { ImageCrudService } from 'src/app/Services/image-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-hotel',
  templateUrl: './show-hotel.component.html',
  styleUrls: ['./show-hotel.component.css']
})
export class ShowHotelComponent {
  constructor( private activatedRoute:ActivatedRoute,public formBuilder:FormBuilder,
     private hotelCrudService: HotelCrudService,
     private ImageCrudService:ImageCrudService, private location: Location){
     }
  getId: any;
  images:any=[];
  imageId: number | null = null;
  selectedImage: File | any = null; 
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/images/';
  
  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hotelCrudService.getHotel(this.getId).subscribe((data)=>{
       this.images=data.data.images;

    },
    (error) => {
      console.error('Error saving data and images:', error);
     
    });
   
  }

  onImageChange(event: Event,imageId:any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];
      this.imageId=imageId;
    }
  }

  onUpdate(){
    console.log(this.imageId);
    console.log(this.selectedImage);
    const formData = new FormData();
    formData.append('image', this.selectedImage);
    this.ImageCrudService.updateImage(this.imageId,formData).subscribe(
      (response) => {
        console.log('Data and images saved successfully');
        this.selectedImage = null;
        location.reload();
        //  this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:hotels)')) 
      },
      (error) => {
        console.error('Error saving data and images:', error);
      }
    );
  }
  
  delete(id:any){
    console.log(id);
    this.ImageCrudService.deleteImage(id).subscribe(res=>{
      console.log('delete');
      this.images = this.images.filter((image: any) => image.id !== id);
  });
  }
  
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
 selectImage() {
  this.fileInput.nativeElement.click();
}



onAddImage(){
  console.log(this.selectedImage);
  const formData = new FormData();
  formData.append('image', this.selectedImage);
  formData.append('imageable_id', this.getId);
  formData.append('imageable_type', 'Hotel');

  this.ImageCrudService.addImage(formData).subscribe(
    (response) => {
      console.log('Data and images saved successfully');
      this.selectedImage = null;
      location.reload();
      //  this.ngZone.run(()=>this.router.navigateByUrl('dashboard/vendor/(details:hotels)')) 
    },
    (error) => {
      console.error('Error saving data and images:', error);
    }
  );
}
onFileSelected(event: any) {
  const selectedFile = event.target.files[0];
  this.selectedImage=selectedFile;
  const reader = new FileReader();

  reader.onload = (e: any) => {
    const imgSrc = e.target.result;
    const imageElement = document.querySelector('#new_image');

    if (imageElement) {
      imageElement.setAttribute('src', imgSrc);
    }
  };

  reader.readAsDataURL(selectedFile);
  this.onAddImage();
}
}
