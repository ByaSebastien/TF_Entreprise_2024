import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input({ required: true })
  parentName!: string;

  @Output()
  myEvent: EventEmitter<string>;

  constructor() {
    this.myEvent = new EventEmitter<string>()
  }

  emit(response: string) {
    this.myEvent.emit(response);
  }
}
