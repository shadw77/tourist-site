import { Component , ViewChild   } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import datajson from '../assets/tables.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-site';

  data:any;


  ngOnInit():void{
    this.data = datajson;
  }

}


  