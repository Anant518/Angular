import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { UserinfoComponent } from './user/userinfo/userinfo.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    UserinfoComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
