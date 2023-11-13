import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { TripCrudService } from '../Services/trip-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent {  
  Trips: any = [];
  data : any;
  products:any;
  counter:number=0;
  timeSlot=sessionStorage.getItem('time_slot');
  searchWord: any;    //start date
  endDate:any;
  faSearch = faSearch;

  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];

  imagePath: string = 'http://127.0.0.1:8000/images/trip_images/thumbnails/';

  constructor(private CounterService:CounterService,
    private router:Router,private cartItems:CartItemService,
    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private tripCrudService: TripCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      if (regex.test(this.data)) {
        console.log('1234',this.searchWord,this.timeSlot);
        if(this.timeSlot)
        this.searchDataService.searchTripsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {             console.log(this.searchWord);
         console.log(this.timeSlot);   
          this.data = response;   

      console.log(this.data);
      
      });
      

      }
      

     else if (this.data &&(!regex.test(this.data))) {
      
        this.searchDataService.searchTrips(this.data).then((response) => {
          this.Trips = response;  
          console.log('Searched Trips:', this.Trips);
        });
      } else {
        
        this.tripCrudService.getTrips().subscribe(res=>{        
          this.Trips= res;
          this.totalPages=this.Trips.meta.last_page;
          this.totalItems =this.Trips.meta.total;
          console.log(this.Trips);
          this.generatePageButtons();
      });
         
      }
    });

            this.CounterService.get_Counter().subscribe((val)=>{
            this.counter=val;
        });


  //   this.route.paramMap.subscribe((params) => {
  //     this.data = params.get('data');
      
  //     if (this.data) {
  //       this.searchDataService.searchTrips(this.data).then((response) => {
  //         this.Trips = response;
  //         console.log('Searched trips:', this.Trips);
  //       });
  //     } else {
  //       this.tripCrudService.getTrips().subscribe((res) => {
  //         this.Trips = res;
  //         this.Trips = this.Trips['data'];
          
  //         console.log('All trips:', this.Trips['data']);
  //       });
  //     }
  //   });
  //   this.CounterService.get_Counter().subscribe((val)=>{
  //     this.counter=val;
  // });
  }
  search() {    
    if (this.timeSlot) {
      sessionStorage.setItem('time_slot',this.timeSlot);
    
      // Handle the searchTripsByTime method
      this.searchDataService.searchTripsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {
        this.data = response;
        this.Trips = this.data;
        this.Trips =this.Trips.data;
    
        console.log(this.data);
      });
    } else {
      // Handle the searchTrips method
      this.searchDataService.searchTrips(this.searchWord).then((response) => {
        this.Trips = response;
        this.Trips =this.Trips.data;
        console.log('Searched Trips:', this.Trips);
      });
    }
    }
  redirectTo(item:any,count:number,type:any,timeSlot:any) {
    this.cartItems.PushCartItems(item,count,type,timeSlot);
    console.log(item);
    
    this.router.navigate(['cart'])

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
    this.tripCrudService.Trips(this.currentPage).subscribe(res=>{        
      this.Trips= res;
  })
  }
  generatePageButtons(): void {
    this.pageButtons = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageButtons.push(i);
    }
  }
}
