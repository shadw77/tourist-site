import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';


@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.css']
})
export class TopDestinationComponent {
@Input() data : any;
ngOnInit():void{
  this.data = datajson;
}

}
