import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';

const routes: Routes = [
  { path: '', redirectTo: 'chrono', pathMatch: 'full' },
  { path: 'chrono', component: ChronoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
