import { Component, Input } from '@angular/core';
import { TripCrudService } from 'src/app/Services/trip-crud.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  imagePath: string = 'http://127.0.0.1:8000/images/trip_images/thumbnails/';
  Trips: any = [];
  trips: any = [];
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];
  searchTerm: string = '';
  selectedItem: any;
  flag:boolean=true;
  constructor(private tripCrudService: TripCrudService){}
  ngOnInit():void{
    this.tripCrudService.getTrips().subscribe((res:any)=>{        
        this.Trips= res.data;
        this.trips=res;
        this.totalPages=res.meta.last_page;
        this.totalItems =res.meta.total;
        console.log(this.Trips);
        this.generatePageButtons();
    });
       
 
  }
  isAdmin(): boolean {
    const user =localStorage.getItem('role');
    return user=== 'admin';
  }

    isVendor(): boolean {
    const user = localStorage.getItem('role');
    return  user === 'vendor';
    }

    delete(id:any,i:any){
      this.tripCrudService.deleteTrip(id).subscribe(res=>{
        this.Trips['data'].splice(i,1);
  })
    
   
  }
  

  getImageUrl(imagePath: string): string {
    return 'https://localhost:8000/api/images/trips/' + imagePath;
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.tripCrudService.Trips(this.currentPage).subscribe((res:any)=>{        
      this.Trips= res.data;
  })
  }
  generatePageButtons(): void {
    this.pageButtons = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageButtons.push(i);
    }
  }
  searchHotelById() {
    const searchId = parseInt(this.searchTerm, 10);
   
      if (searchId) {
        this.tripCrudService.searchHotelById(searchId).subscribe(
          (trip:any) => {
          //  this.Trips = hotel.data; // Display the found hotel
         
           this.Trips = [trip.data];
            console.log(this.Trips)
          },
          (error) => {
            console.error('Error searching hotel:', error);
          }
        );
      } 
      else {
        this.tripCrudService.getTrips().subscribe((res:any)=>{        
          this.Trips= res.data;
          this.totalPages=res.meta.last_page;
          this.totalItems =res.meta.total;
      });
      }
    }
}
