import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent {
  requestresetform!:FormGroup;
  successMessage:string='';
  ErrorEmailBackend:any;


  public form={
    email:null
  };

  constructor(private auth:AuthService,private Fb:FormBuilder,){}

  ngOnInit(): void {

    /*start initialize signin inputs*/
    this.requestresetform=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
    });
    /*end initialize signin inputs*/

  }

    /*start login inputs*/
    get loginemail(){
      return this.requestresetform.get('email');
    }  
    /*end login inputs*/

  onSubmit(requestresetform:any){
    //console.log(userform);
      this.auth.sendPasswordResetLink(requestresetform.value).subscribe({
        next:(next)=>{
          if(next.status == 400){
          console.log(next);

            var {email}=next.error;
            this.ErrorEmailBackend=email;
            console.log(email);
          }
          else if(next.status == 200){
            this.successMessage=next.mssg;
          }
          //console.log(next);
        },
        error:(error) => {
          console.error('Error fetching reviews:', error);
        },
        complete:()=>{
        }
      });
    }

}
