import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
  near:any;

  
  constructor(private data:HandleapiService){

  }

  ngOnInit(){
    this.near=this.data.getdata();
    console.log(this.near);
  }

}
