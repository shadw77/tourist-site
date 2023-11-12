import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { HandleapiService } from 'src/app/Services/handleapi.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
   offers:any[]=[];
   discountedItems: any[]=[];

  constructor(private http: HttpClient,private data:HandleapiService) { }


  ngOnInit() {//start ngoninit

    /*start function that call getdiscount function from service*/
    this.data.getDiscount().subscribe({
      next:(next)=>{
        this.discountedItems=next.data;
        this.offers  = Object.values(this.discountedItems);
      },
      error:(error) => {
        console.error('Error fetching places:', error);
      },
      complete:()=>{
      }
    });
    /*end function that call getdiscount function from service*/

  
  }//end ngoninit


}
