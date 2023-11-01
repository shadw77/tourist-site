import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { DestinationCrudService } from '../Services/destination-crud.service';


@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.css']
})
export class TopDestinationComponent {
  Destinations: any = [];

  constructor(private destinationCrudService: DestinationCrudService){}
  // ngOnInit():void{
  //   this.destinationCrudService.getDestinations().subscribe(res=>{        
  //       this.Destinations= res;
  //       // console.log(this.Destinations['destinations']);
  //       console.log(this.Destinations);
  //   })
  // }



  ngOnInit(): void {
    this.getTopDestinations();      console.log(this.Destinations);

  }

  getTopDestinations(): void {
    this.destinationCrudService.getTopDestinations()
      .subscribe(destinations => {
        console.log(destinations);
        this.Destinations = destinations.slice(0, 6);
      });
  }


}
