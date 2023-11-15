import { Component } from '@angular/core';
import{ DestinationCrudService } from 'src/app/Services/destination-crud.service';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {

  Destinations: any = [];

  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];
  imagePath: string = 'http://127.0.0.1:8000/images/destination_images/thumbnails/';


  constructor(private destinationCrudService: DestinationCrudService){}
  ngOnInit():void{
    this.destinationCrudService.getDestinations().subscribe((res:any)=>{  
      this.Destinations=res; 
       this.totalPages=this.Destinations['destinations'].last_page;
       this.totalItems =this.Destinations['destinations'].total;     
      //  this.Destinations = this.Destinations;
      this.generatePageButtons();
         console.log(res);
         console.log(this.totalItems);
    })
  }
  isAdmin(): boolean {
    const user =localStorage.getItem('role');
    return user=== 'admin';
  }

  isVendor(): boolean {
    const user = localStorage.getItem('role');
    return  user === 'vendor';
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

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.destinationCrudService.Destinations(this.currentPage).subscribe(res=>{        
      this.Destinations= res;
  })
  }
  generatePageButtons(): void {
    this.pageButtons = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageButtons.push(i);
    }
  }
  
}