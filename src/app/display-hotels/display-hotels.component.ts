import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HotelCrudService } from '../Services/hotel-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
import { HandleapiService } from '../Services/handleapi.service'; 
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent {
  Hotels: any = [];
  data : any;
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  products:any;
  counter:number=0;
  constructor(private CounterService:CounterService,
    private router:Router,private cartItems:CartItemService,

    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private hotelCrudService: HotelCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchHotels(this.data).then((response) => {
          this.Hotels = response;
          console.log('Searched Hotels:', this.Hotels);
        });
      } else {
        this.hotelCrudService.getHotels().subscribe((res) => {
          this.Hotels = res;
          this.Hotels = this.Hotels['data'];
          
          console.log('All Hotels:', this.Hotels['data']);
        });
      }
    });

            this.CounterService.get_Counter().subscribe((val)=>{
            this.counter=val;
        });
  }
 
  redirectTo(item:any,count:number,type:any) {
    this.cartItems.PushCartItems(item,count,type);
    console.log(item);
    
    this.router.navigate(['cart'])


}

 
}
