import { Component } from '@angular/core';
import datajson from '../../assets/tables.json';
import { TripCrudService } from '../Services/trip-crud.service';

@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent {
  // data : any;
  // ngOnInit():void{
  //   this.data = datajson;
  // }
  
  Trips: any = [];

  constructor(private tripCrudService: TripCrudService){}
  ngOnInit():void{
    this.tripCrudService.getTrips()  .subscribe(res=>{        
        this.Trips= res;
        console.log(this.Trips['data']);
    })
  }
}
