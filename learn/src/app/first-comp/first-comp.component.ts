import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Output() setname:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.setname.emit('from child')
  }

}
