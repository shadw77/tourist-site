import { Component } from '@angular/core';
import datajson from '../../assets/tables.json';

@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent {
  data : any;
  ngOnInit():void{
    this.data = datajson;
  }
}
