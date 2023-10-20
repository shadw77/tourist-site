import { Component } from '@angular/core';
import datajson from '../../assets/tables.json';

@Component({
  selector: 'app-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.css']
})
export class DisplayRestaurantComponent {
  data : any;
  ngOnInit():void{
    this.data = datajson;
  }
}
