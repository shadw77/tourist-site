import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbcomment',
  templateUrl: './ngbcomment.component.html',
  styleUrls: ['./ngbcomment.component.css']
})
export class NgbcommentComponent implements OnInit{
  @Input() reviews:any[]=[];


  ngOnInit(){
    //console.log(this.reviews);
  }

}
