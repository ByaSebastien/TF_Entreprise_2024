import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { ToFahrenheitPipe } from './demo-pipe/pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './demo-pipe/pipes/convert-temp.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoStructuralDirectiveComponent } from './demo-structural-directive/demo-structural-directive.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { EnfantComponent } from './demo-input-output/enfant/enfant.component';
import { DemoCrudComponent } from './demo-crud/demo-crud.component';
import { CreateComponent } from './demo-crud/pages/create/create.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './demo-crud/pages/login/login.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    ToFahrenheitPipe,
    ConvertTempPipe,
    DemoDirectivesComponent,
    DemoStructuralDirectiveComponent,
    DemoInputOutputComponent,
    EnfantComponent,
    DemoCrudComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
})
export class DemoModule { }
