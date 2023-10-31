import { Component } from '@angular/core';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';

@Component({
  selector: 'app-hotels-vendor',
  templateUrl: './hotels-vendor.component.html',
  styleUrls: ['./hotels-vendor.component.css']
})
export class HotelsVendorComponent {
  Hotels: any = [];
  images: string[] = [
    'http://localhost:8000/images/Hotel_images',
  ];
  constructor(private hotelCrudService: HotelCrudService){}
  ngOnInit():void{
    this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
        // console.log(this.Hotels['data']);
    })
    console.log(this.images);
  }
 
  delete(id:any, i:any){
    console.log(id);
    this.hotelCrudService.deleteHotel(id).subscribe(res=>{
      this.Hotels.splice(i,1);
  })
    
   
  }
}
