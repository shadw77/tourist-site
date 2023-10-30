import { Component } from '@angular/core';
import { UserCrudService } from 'src/app/Services/user-crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  Users: any = [];

  constructor(private userCrudService: UserCrudService){}
  ngOnInit():void{
    this.userCrudService.getUsers().subscribe(res=>{        
        this.Users= res;
        console.log(this.Users['data']);
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.userCrudService.deleteUser(id).subscribe(res=>{
      this.Users.splice(i,1);
  })
    
   
  }
}
