import { Component, Input ,ViewChild, ElementRef } from '@angular/core';
import { CuttextPipe } from '../../Pipes/cuttext.pipe';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() city:any[]=[];
  lineofdescription:number=50;
  buttonstatus:boolean=true;

  constructor() { }

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
  /*end function that maximize,minimize description and toggle button*/


  }

}
