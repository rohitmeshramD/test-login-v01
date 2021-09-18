import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreAuthComponent } from './pre-auth.component';
import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, PreAuthComponent],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PreAuthModule { }
