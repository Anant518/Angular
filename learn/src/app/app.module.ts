import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRoutingModule } from './user/user-routing.module'
import { FirstCompComponent } from './first-comp/first-comp.component';
import { UserinfoComponent } from './user/userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
