import { AbstractControl, ValidatorFn,ValidationErrors } from "@angular/forms";


export const passwordidentical:ValidatorFn=
(control:AbstractControl):ValidationErrors | null =>{
  let password=control.get('password');
  let confirmpassword=control.get("confirmpassword");
  let errorsvalidation={"passwordnotidenticalconfirm":"password and confirm password should be same"}

  return (password?.value == confirmpassword?.value) ?null : errorsvalidation;

}
