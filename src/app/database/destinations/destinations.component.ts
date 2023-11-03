import { Component } from '@angular/core';
import{ DestinationCrudService } from 'src/app/Services/destination-crud.service';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {

  Destinations: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Destination_images/thumbnails/';

  constructor(private destinationCrudService: DestinationCrudService){}
  ngOnInit():void{
    this.destinationCrudService.getDestinations().subscribe(res=>{        
        this.Destinations= res;
         console.log(this.Destinations['destinations']);
        console.log(res);       
        console.log("hi correct");
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.destinationCrudService.deleteDestination(id).subscribe(res=>{
      this.Destinations.splice(i,1);
  })
    
  this.destinationCrudService.getDestinations().subscribe(res=>{        
                 this.Destinations= res;
            }); 
  }

 
}