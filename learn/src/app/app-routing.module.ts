import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component'
import { UserinfoComponent } from './user/userinfo/userinfo.component'

const routes: Routes = [
  {
    path:'first',
    component:FirstCompComponent
  },
  {
    path:'info',
    component:UserinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
