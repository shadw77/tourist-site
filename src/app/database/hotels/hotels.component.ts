import { Component } from '@angular/core';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  Hotels: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';

  constructor(private hotelCrudService: HotelCrudService){}
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