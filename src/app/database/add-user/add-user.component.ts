import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
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
      name:['', [Validators.required]],
      government:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      street:['', [Validators.required]],
      mobile:['', [Validators.required]],
      role:['', [Validators.required]],

    })
    
  }
  onSubmit():any{
    this.markFormGroupTouched(this.userForm);

    if (this.userForm.valid) {
    this.userCrudService.addUser(this.userForm.value)
    .subscribe(()=>{
      console.log('Data Added Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('dashboard/admin/(details:users)')) 
    },(err)=>{
      console.log(err);
      
    })
  }
}


markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach((control) => {
    control.markAsTouched();

    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}
}