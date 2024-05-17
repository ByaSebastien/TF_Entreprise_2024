import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {

  seconds: number = 0;
  timer: any;

  start() {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  stop() {
    if (!this.timer) {
      return;
    }
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    if (this.timer) {
      return;
    }
    this.seconds = 0;
  }
}
