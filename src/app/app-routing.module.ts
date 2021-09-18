import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pre-auth/pre-auth.module').then((m) => m.PreAuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./post-auth/post-auth.module').then((m) => m.PostAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
