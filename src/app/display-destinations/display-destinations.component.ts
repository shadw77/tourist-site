import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { DestinationCrudService } from '../Services/destination-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItemService } from '../Services/cart-item.service';
import {CounterService} from 'src/app/Services/counter.service'

@Component({
  selector: 'app-display-destinations',
  templateUrl: './display-destinations.component.html',
  styleUrls: ['./display-destinations.component.css']
})
export class DisplayDestinationsComponent {
  Destinations: any = [];
  data : any;
  imagePath: string = 'http://127.0.0.1:8000/images/destination_images/thumbnails/';
  service:any;
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];

  constructor(private router:Router, private cartItems:CartItemService,private CounterService:CounterService,
    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private destinationCrudService: DestinationCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchDestinations(this.data).then((response) => {
          this.Destinations = response;
          console.log('Searched Destinations:', this.Destinations);
        });
      } else {
        
        this.destinationCrudService.getDestinations().subscribe((res) => {
          console.log('resss', res);
          
          this.Destinations = res;
          this.Destinations = this.Destinations;
          // this.totalPages=this.Destinations.meta.last_page;
          // this.totalItems =this.Destinations.meta.total;
          this.totalPages=this.Destinations['destinations'].last_page;
          this.totalItems =this.Destinations['destinations'].total; 
          this.generatePageButtons();
          console.log('All Destinations:', this.Destinations);
        });
      }
      
    });  }

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
    viewDetails(data: any,name:string ) {
      this.router.navigate(['discover', `${name}-detailsD`], { state: {  data } });
    }
}
