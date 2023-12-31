import { Component, Input ,ViewChild, ElementRef } from '@angular/core';
import { CuttextPipe } from '../../Pipes/cuttext.pipe';
import { Router } from '@angular/router';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() city:any[]=[];
  lineofdescription:number=50;
  buttonstatus:boolean=true;
  tripsImagePath: string =  'http://127.0.0.1:8000/images/trip_images/thumbnails/';
  hotelsImagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  restaurantsImagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  constructor(private router: Router) { }

  ngOnInit(){
    //console.log(this.city);
  }


  /*start function that maximize,minimize description and toggle button*/
  change(description:HTMLParagraphElement,near:any,event:any){
    //console.log(near);
    //console.log(event.target);
    if (description) {
      const dataContent = description.getAttribute('data-content');

      //near.buttonstatus initialize value is false
      if(!near.buttonstatus){
        if (dataContent) {
          near.displayLength  = dataContent.length;
          //console.log(near.buttonstatus);
          near.buttonstatus=!near.buttonstatus;
        }
      }
      else{
        near.displayLength=0;
        near.buttonstatus=!near.buttonstatus;
      }
    }
  }
  /*end function that maximize,minimize description and toggle button*/


  /*start function that navigate to route with data details*/
  viewDetails(data: any,name:string) {
    //console.log(data);
    // Encode the entire data object
    this.router.navigate(['discover', `${name}-details`], { state: {  data } });
  }
  /*end function that navigate to route with data details*/



}
