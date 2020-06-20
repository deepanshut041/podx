import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent, ForgotPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
