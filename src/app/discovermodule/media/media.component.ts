import { Component, Input } from '@angular/core';
import { CuttextPipe } from '../../Pipes/cuttext.pipe';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() city:any;
  lineofdescription:number=50;

  customUpperCasePipe = new CuttextPipe();


  ngOnInit(){
    //console.log(this.city);
  }


  change(description:any):void{
    //console.log(description.value);

   // console.log(this.customUpperCasePipe.transform(description.value,description.value.length));
    //this.city[index].description.length;
  }

}
