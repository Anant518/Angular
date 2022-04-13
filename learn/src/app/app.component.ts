import { Component } from '@angular/core';
import { UserdataService } from './userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  constructor(private us: UserdataService) {
    console.warn(us.getdata())
    this.us.getfromhttp().subscribe(data => {
      console.warn(data)
      this.data=data
    })

  }

}
