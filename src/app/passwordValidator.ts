import { AbstractControl,ValidationErrors  } from "@angular/forms";

export class PasswordValidators{
    static matchPassword(control:AbstractControl) : ValidationErrors | null {
        const password=control.get('password');
        const confirmpassword=control.get('confirmPassword');
        if(password !== confirmpassword){
            return{mismatch:true}
        }
       
        
    return null;
    }
}