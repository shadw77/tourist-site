import { Component } from '@angular/core';
import datajson from '../../assets/tables.json';

@Component({
  selector: 'app-display-destinations',
  templateUrl: './display-destinations.component.html',
  styleUrls: ['./display-destinations.component.css']
})
export class DisplayDestinationsComponent {
  data : any;
  ngOnInit():void{
    this.data = datajson;
  }
}
