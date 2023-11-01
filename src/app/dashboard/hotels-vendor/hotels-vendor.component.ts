
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotels-vendor',
  templateUrl: './hotels-vendor.component.html',
  styleUrls: ['./hotels-vendor.component.css']
})
export class HotelsVendorComponent {
  Hotels: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';

  constructor(private hotelCrudService: HotelCrudService,private route: ActivatedRoute,
    private router:Router,
    private ngZone:NgZone,){}
  ngOnInit():void{
    this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
        // console.log(this.Hotels['data']);
    });
   
  }

  delete(id:any){
    console.log(id);
    this.hotelCrudService.deleteHotel(id).subscribe(res=>{
      console.log('delete');
      this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
    });
  })
  }
  
}
