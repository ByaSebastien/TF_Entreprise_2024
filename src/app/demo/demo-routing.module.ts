import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoStructuralDirectiveComponent } from './demo-structural-directive/demo-structural-directive.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { DemoCrudComponent } from './demo-crud/demo-crud.component';
import { movieResolver } from './demo-crud/resolvers/movie.resolver';
import { CreateComponent } from './demo-crud/pages/create/create.component';
import { LoginComponent } from './demo-crud/pages/login/login.component';
import { isAuthenticateGuard } from './demo-crud/guards/is-authenticate.guard';

const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      { path: 'binding', component: DemoBindingComponent },
      { path: 'pipe', component: DemoPipeComponent },
      { path: 'directive', component: DemoDirectivesComponent },
      { path: 'directive2', component: DemoStructuralDirectiveComponent },
      { path: 'inputoutput', component: DemoInputOutputComponent },
      {
        path: 'movies',
        component: DemoCrudComponent,
        resolve: { mr: movieResolver }
      },
      {
        path: 'movies/create',
        component: CreateComponent,
        canActivate: [isAuthenticateGuard]
      },
      {
        path: 'movies/login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
