import { Component, ViewChild } from '@angular/core';
import { EnfantComponent } from './enfant/enfant.component';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrls: ['./demo-input-output.component.scss']
})
export class DemoInputOutputComponent {

  @ViewChild(EnfantComponent) enfantComponent!: EnfantComponent;
  name: string = "";

  reactToChild(response: string) {
    console.log(response);
    switch (response) {
      case 'y':
        alert('Yes was pressed');
        break;
      case 'n':
        alert('No was pressed');
        break;
    }
    // this.enfantComponent.parentName
  }
}
