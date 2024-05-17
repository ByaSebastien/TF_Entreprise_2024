import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss']
})
export class DemoDirectivesComponent {

  currentStyle: any;

  isItalic: boolean = false;
  isBold: boolean = false;
  isBig: boolean = false;
  isRed: boolean = false;

  constructor() {
    this.setCurrentStyle();
  }


  setCurrentStyle() {
    this.currentStyle = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': this.isBig ? '24px' : '12px'
    }
  }

  toggleIsItalic() {
    this.isItalic = !this.isItalic;
    this.setCurrentStyle();
  }

  toggleIsBold() {
    this.isBold = !this.isBold;
    this.setCurrentStyle();
  }

  toggleIsBig() {
    this.isBig = !this.isBig;
    this.setCurrentStyle();
  }

  toggleIsRed() {
    this.isRed = !this.isRed;
  }
}
