import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UserCrudService } from 'src/app/Services/user-crud.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private userCrudService: UserCrudService
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userCrudService.getUser(this.getId).subscribe(res=>{
      console.log(res['user']['id']);

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
      name:['', [Validators.required]],
      government:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      street:['', [Validators.required]],
      mobile:['', [Validators.required]],
      role:['', [Validators.required]],

    })
   
    
  }

  onUpdate(): any {
    if (this.updateForm.invalid) {
      this.markFormGroupTouched(this.updateForm);
      return;
    }

    this.userCrudService.updateUser(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data Updated Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('dashboard/admin/(details:users)'));
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