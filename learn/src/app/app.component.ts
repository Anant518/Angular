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

  setName(data){
    console.warn(data);
  }
}
