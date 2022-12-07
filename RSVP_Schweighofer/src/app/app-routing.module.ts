import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { RsvpSignUpComponent } from './rsvp-sign-up/rsvp-sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'rsvp-sign-up', pathMatch:'full'},
  {path: 'rsvp-sign-up', component: RsvpSignUpComponent},
  {path: 'guest-list', component: GuestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
