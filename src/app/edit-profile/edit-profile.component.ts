import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from '../Services/user-crud.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private userCrudService: UserCrudService
  ){    
    this.getId = localStorage.getItem("userId");

    this.userCrudService.getUser(this.getId).subscribe(res=>{
    
      this.updateForm.setValue({
      id:res['data']['id'],
      name:res['data']['name'],
      government:res['data']['government'],
      email:res['data']['email'],
      password:res['data']['password'],
      street:res['data']['street'],
      mobile:res['data']['mobile'],
      role:res['data']['role'],

    });
    });   
    this.updateForm = this.formBuilder.group({
      id:[''],
      name:['', []],
      government:['', []],
      email:['', ],
      password:['', ],
      street:['', ],
      mobile:['', ],
      role:['', ],

    })
   
    
  }

  onUpdate(): any {      console.log('kkkkkk',this.updateForm);

    if (this.updateForm.invalid) {
      
      this.markFormGroupTouched(this.updateForm);
      return;
    }

    this.userCrudService.updateUser(this.getId, this.updateForm.value).subscribe(
      () => {        
        console.log('Data Updated Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
      },
      (err) => {
        console.log(err);
      }
    );
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
