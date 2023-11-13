import { Component, EventEmitter, Input, Output } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HotelCrudService } from '../Services/hotel-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
import { HandleapiService } from '../Services/handleapi.service'; 
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent {
  Hotels: any = [];
  faSearch = faSearch;
  @Output() keywordChanged: EventEmitter<string> = new EventEmitter<string>();
  searchWord: any;    //start date
  endDate:any;
  timeSlot:any;
  data : any;
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  products:any;
  counter:number=0;
  time_slot=sessionStorage.getItem('time_slot');
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];

  constructor(private CounterService:CounterService,
    private router:Router,private cartItems:CartItemService,

    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private hotelCrudService: HotelCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{
    

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      if (regex.test(this.data)) {
        console.log('1234',this.searchWord,this.timeSlot);
        
        this.searchDataService.searchHotelsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {             console.log(this.searchWord);
         console.log(this.timeSlot);
          this.data = response;   

      console.log(this.data);
      
      });
      

      }
      

     else if (this.data &&(!regex.test(this.data))) {
      
        this.searchDataService.searchHotels(this.data).then((response) => {
          this.Hotels = response;
          console.log('Searched Hotels:', this.Hotels);
        });
      } else {
        
        this.hotelCrudService.getHotels().subscribe((res) => {
          this.Hotels = res;
          // this.Hotels = this.Hotels['data'];
          this.totalPages=this.Hotels.meta.last_page;
          this.totalItems =this.Hotels.meta.total;
          console.log(this.Hotels);
          this.generatePageButtons();
          
          console.log( this.Hotels);
        });
      }
    });

            this.CounterService.get_Counter().subscribe((val)=>{
            this.counter=val;
        });
  }
 
  redirectTo(item:any,count:number,type:any, time_slot:any) {
    this.cartItems.PushCartItems(item,count,type, time_slot);
    console.log(item);
    
    this.router.navigate(['cart'])


}
search() {    
if (this.timeSlot) {
  sessionStorage.setItem('time_slot',this.timeSlot);

  // Handle the searchHotelsByTime method
  this.searchDataService.searchHotelsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {
    this.data = response;
    this.Hotels = this.data;
    this.Hotels =this.Hotels.data;

    console.log(this.data);
  });
} else {
  // Handle the searchHotels method
  this.searchDataService.searchHotels(this.searchWord).then((response) => {
    this.Hotels = response;
    this.Hotels =this.Hotels.data;
    console.log('Searched Hotels:', this.Hotels);
  });
}
}




getStartDate(event: any){
  this.searchWord = event.target.value;
  console.log(this.searchWord);
  
}

getEndDate(event: any){
  this.endDate = event.target.value;
  console.log(this.endDate);
  
}
onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
  this.hotelCrudService.hotels(this.currentPage).subscribe(res=>{        
    this.Hotels= res;
})
}
generatePageButtons(): void {
  this.pageButtons = [];
  for (let i = 1; i <= this.totalPages; i++) {
    this.pageButtons.push(i);
  }
}
 
}
