import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular';
  name = 'My Name is Anant';

  getName(){
    return this.name;
  }

  obj={
    name : 'Passing Array name',
    roll : 234
  }

  arr = ['anx','xyz','me']

  siteUrl = window.location.href
}
