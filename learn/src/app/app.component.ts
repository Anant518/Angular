import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name = "Anant"
  getName(){
    alert('Heyy');
  }
  arr = ['anx','xyz','me']

  siteUrl = window.location.href
  onsubmit(data){
    console.warn(data)
  }
}
