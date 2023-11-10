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
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];
  constructor(private tripCrudService: TripCrudService){}
  ngOnInit():void{
    this.tripCrudService.getTrips().subscribe(res=>{        
        this.Trips= res;
        this.totalPages=this.Trips.meta.last_page;
        this.totalItems =this.Trips.meta.total;
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

  delete(id:any){
    this.tripCrudService.deleteTrip(id).subscribe(res=>{
    this.tripCrudService.getTrips().subscribe(res=>{        
      this.Trips= res;
  });
  })
    
   
  }
  

  getImageUrl(imagePath: string): string {
    return 'https://localhost:8000/api/images/trips/' + imagePath;
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
