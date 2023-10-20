import { Component } from '@angular/core';
import datajson from '../../assets/tables.json';

@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent {
  data : any;
  ngOnInit():void{
    this.data = datajson;
  }
}
