import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("In Ctor");
  }
  ngOnInit(): void {
    console.log("In OnInit");
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
  }

}
