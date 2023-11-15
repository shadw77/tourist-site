import { Component } from '@angular/core';
import{ HotelCrudService } from 'src/app/Services/hotel-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  // hotelForm: FormGroup;
  Hotels: any = [];
  hotels: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];
  searchTerm: string = '';
  selectedItem: any;
  flag:boolean=true;
  constructor(private hotelCrudService: HotelCrudService){}
  ngOnInit():void{
    this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
        this.totalPages=this.Hotels.meta.last_page;
        this.totalItems =this.Hotels.meta.total;
        // this.hotels=this.Hotels['data'];
        this.generatePageButtons();
       console.log(this.hotels);
    });
   
  }

  delete(id:any){
    console.log(id);
    this.hotelCrudService.deleteHotel(id).subscribe(res=>{
      console.log('delete');
      this.hotelCrudService.getHotels().subscribe(res=>{        
        this.Hotels= res;
    });
  });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.hotelCrudService.hotels(this.currentPage).subscribe(res=>{        
      this.Hotels= res;
  })
  }
  generatePageButtons(): void {
    this.pageButtons = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageButtons.push(i);
    }
  }

  isAdmin(): boolean {
    const user =localStorage.getItem('role');
    return user=== 'admin';
  }

  isVendor(): boolean {
    const user = localStorage.getItem('role');
    return  user === 'vendor';
  }

  searchHotelById() {
    const searchId = parseInt(this.searchTerm, 10);
   
      if (searchId) {
        this.hotelCrudService.searchHotelById(searchId).subscribe(
          (hotel) => {
           this.selectedItem = hotel.data; // Display the found hotel
          },
          (error) => {
            console.error('Error searching hotel:', error);
          }
        );
      } 
      // else {
      //   this.loadHotels(); // Reload all hotels if searchId is empty
      // }
    }
  }
