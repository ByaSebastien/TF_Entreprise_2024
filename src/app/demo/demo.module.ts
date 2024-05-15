import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { ToFahrenheitPipe } from './demo-pipe/pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './demo-pipe/pipes/convert-temp.pipe';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
})
export class DemoModule { }
