import { Component } from '@angular/core';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  Hotels: any = [];

  constructor(private hotelCrudService: HotelCrudService){}
  ngOnInit():void{
    this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
        console.log(this.Hotels['data']);
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.hotelCrudService.deleteHotel(id).subscribe(res=>{
      this.Hotels.splice(i,1);
  })
    
   
  }

}