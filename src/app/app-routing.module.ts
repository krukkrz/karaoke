import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoterComponent } from './voter/voter.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {
    path: '',
    component: VoterComponent
  },
  {
    path: 'disp',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
