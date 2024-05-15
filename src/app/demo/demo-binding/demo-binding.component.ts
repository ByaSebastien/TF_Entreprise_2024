import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent {

  firstname: string = 'Seb';
  lastname: string = '';
  isClickable: boolean = true;

  // constructor(){
  //   this.firstname = 'Seb';
  // }

  reset(): void {
    this.lastname = '';
  }

  sayHello() {
    alert('Hello world!!!');
  }

  toggleIsClickable() {
    this.isClickable = !this.isClickable;
  }

}
