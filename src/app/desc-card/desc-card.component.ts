import { Component, Input } from '@angular/core';
import { Trip } from '../interface/trip';

@Component({
  selector: 'app-desc-card',
  templateUrl: './desc-card.component.html',
  styleUrls: ['./desc-card.component.css']
})
export class DescCardComponent {
  @Input() trip !: Trip;

}
