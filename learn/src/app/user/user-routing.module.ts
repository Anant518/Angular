import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
console.warn('user');
const routes: Routes = [
  {
    path: 'user', children: [
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: 'SignUp',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
