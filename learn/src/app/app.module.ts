import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
