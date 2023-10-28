import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserCrudService } from 'src/app/Services/user-crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private userCrudService: UserCrudService
  ){
    this.userForm = this.formBuilder.group({
      id:[''],
      name:[''],
      government:[''],
      email:[''],
      password:[''],
      street:[''],
      mobile:[''],
      role:[''],

    })
    
  }
  onSubmit():any{
    this.userCrudService.addUser(this.userForm.value)
    .subscribe(()=>{
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/users-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}
