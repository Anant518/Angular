import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular';
  name = 'My Name is Anant';

  getName() {
    return this.name;
  }

  obj = {
    name: 'Passing Array name',
    roll: 234
  }

  arr = ['anx', 'xyz', 'me']

  siteUrl = window.location.href
  onsubmit(data) {
    console.warn(data)
  }

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),

  })
  loginUser() {
    console.warn(this.loginForm.value)
  }
}
