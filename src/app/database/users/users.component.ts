import { Component } from '@angular/core';
import { UserCrudService } from 'src/app/Services/user-crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  Users: any = [];
  searchTerm: string = '';
  selectedItem: any;
  flag:boolean=true;
  constructor(private userCrudService: UserCrudService){}
  ngOnInit():void{
    this.userCrudService.getUsers().subscribe((res:any)=>{        
        this.Users=res.data;
        //console.log(this.Users['data']);
    })
  }

  delete(id:any,i:any){
    console.log(this.Users);
    this.userCrudService.deleteUser(id).subscribe(res=>{
      this.Users['data'].splice(i,1);
    })
  }

  searchHotelById() {
    const searchId = parseInt(this.searchTerm, 10);
   
      if (searchId) {
        this.userCrudService.searchHotelById(searchId).subscribe(
          (user:any) => {
          //  this.Trips = hotel.data; // Display the found hotel
         
           this.Users = [user.data];
            console.log(this.Users)
          },
          (error) => {
            console.error('Error searching hotel:', error);
          }
        );
      } 
      else {
        this.userCrudService.getUsers().subscribe((res:any)=>{        
          this.Users= res.data;
      });
      }
    }
  
}
