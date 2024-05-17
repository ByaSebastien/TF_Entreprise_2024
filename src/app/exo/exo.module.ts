import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ChronoComponent } from './chrono/chrono.component';
import { ConvertTimePipe } from './chrono/pipes/convert-time.pipe';


@NgModule({
  declarations: [
    ChronoComponent,
    ConvertTimePipe
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule {
}
