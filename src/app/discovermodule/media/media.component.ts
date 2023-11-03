import { Component, Input ,ViewChild, ElementRef } from '@angular/core';
import { CuttextPipe } from '../../Pipes/cuttext.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() city:any[]=[];
  lineofdescription:number=50;
  buttonstatus:boolean=true;


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
    console.log(data);
    this.router.navigate(  [`discover/${name}-details` ,  data ]);

  }
  /*end function that navigate to route with data details*/



}
