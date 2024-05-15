import { Component } from '@angular/core';
import { TempUnit } from './enums/temp-unit';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent {

  myString: string = 'Bonjour le monde';
  myNumber: number = 42;
  myDate: Date = new Date(1991, 3, 27);
  tempUnit = TempUnit;

}
