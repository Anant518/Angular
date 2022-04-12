import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './userinfo/userinfo.component';



@NgModule({
  declarations: [
    UserinfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserinfoComponent
  ]
})
export class UserModule { }
