import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitesContainerComponent } from './invites-container/invites-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: InvitesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
