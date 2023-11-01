import { Component ,NgZone} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.css']
})
export class UserOrderDetailsComponent {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone,
    private userOrderCrudService: UserOrderCrudService
  ){    
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userOrderCrudService.getUserOrder(this.getId).subscribe(res=>{
      console.log(res['data']);

      this.updateForm.setValue({
      id:res['data']['id'],
      user_id:res['data']['user_id'],
      service_id:res['data']['service_id'],
      service_type:res['data']['service_type'],

    });
    });   
    this.updateForm = this.formBuilder.group({
      id:[''],
      user_id:[''],
      service_id:[''],
      service_type:[''],
    });
    
  }
  onUpdate():any{
    this.userOrderCrudService.updateUserOrder(this.getId,this.updateForm.value)
    .subscribe(()=>{
      console.log('Data Updated Successfully');
      this.ngZone.run(()=>this.router.navigateByUrl('/users-list')) 
    },(err)=>{
      console.log(err);
      
    })
  }


}

