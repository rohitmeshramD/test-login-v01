import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreAuthComponent } from './pre-auth.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, PreAuthComponent],
  imports: [
    CommonModule
  ]
})
export class PreAuthModule { }
