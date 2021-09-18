import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [PostAuthComponent, DashboardComponent],
  imports: [
    CommonModule,
    PostAuthRoutingModule
  ]
})
export class PostAuthModule { }
