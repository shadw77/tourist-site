import { Component } from '@angular/core';
import { TripCrudService } from 'src/app/Services/trip-crud.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  Trips: any = [];
  // image ='https://localhost:8000/public/images/trips';

  constructor(private tripCrudService: TripCrudService){}
  ngOnInit():void{
    this.tripCrudService.getTrips()  .subscribe(res=>{        
        this.Trips= res;
        console.log(this.Trips['data']);
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.tripCrudService.deleteTrip(id).subscribe(res=>{
      this.Trips.splice(i,1);
  })
    
   
  }

  getImageUrl(imagePath: string): string {

    // console.log('https://localhost:8000/storage/app/public/images/trips/' + imagePath);
    // console.log('https://localhost:8000/storage/images/trips/' + imagePath);
    

    // console.log('https://localhost:8000/storage/images/trips/' + encodeURIComponent(imagePath));
    
    // return 'https://localhost:8000/api/trips/' + encodeURIComponent(imagePath);
    return 'https://localhost:8000/api/images/trips/' + imagePath;

}
}
