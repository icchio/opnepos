import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CassaComponent } from './cassa/cassa.component'
import { UtentiComponent } from './utenti/utenti.component'

const routes: Routes = [
  { path : '', component: CassaComponent},
  { path : 'cassa', component : CassaComponent},
  { path : 'utenti', component: UtentiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
