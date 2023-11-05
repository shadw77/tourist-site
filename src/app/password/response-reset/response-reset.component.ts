import { Component,Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/customsvalidations/passwordidentical";
import { AuthService } from '../../Services/auth.service';
import { HandleapiService } from '../../Services/handleapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent {
  userregister!:FormGroup;
  governments:any;
  ErrorFromBackend:any;
  successMessage:string='';
  ErrorMessage:string='';
  ErrorEmailBackend:any;
  ErrorPasswordBackend:any;

  constructor(
    private Fb:FormBuilder,
    protected authservice:AuthService,
    private data:HandleapiService,
    private route:ActivatedRoute,
    private router:Router
    ) {} 

        
  ngOnInit(): void {

    /*start initialize signup inputs*/
    this.userregister=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.maxLength(9)]],
      confirmpassword:['',[Validators.required, Validators.maxLength(9)]],
      token:[''],

    },{validators:passwordidentical});
        /*end initialize signup inputs*/

      this.route.queryParams.subscribe(params=>{
        this.userregister.get('token')?.patchValue(params['token']);
      });
  }


  /*start register inputs*/
  get registeremail(){
    return this.userregister.get('email');
  }  

  get registerpassword(){
    return this.userregister.get('password');
  }
  get registerconfirmpassword(){
    return this.userregister.get('confirmpassword');
  }
  /*end register inputs*/

  /*start register function*/
  submitteddata(userform:any){
    this.successMessage="";
    this.ErrorEmailBackend="";
    this.ErrorPasswordBackend="";
    //console.log(userform);
    this.authservice.changePassword(userform.value).subscribe({
      next:(next)=>{
        console.log(next);
        if(next.status == 400){
          console.log(next);

            var {email,password}=next.error;
            this.ErrorPasswordBackend=password;
            this.ErrorEmailBackend=email;
            console.log(email);
          }
        else if(next.status == 200){
          alert(next.mssg);

          this.router.navigateByUrl('/login');
        }
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{}
    });
    
  }
  /*end register function*/


}
