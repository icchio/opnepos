import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CassaComponent } from './cassa/cassa.component'

const routes: Routes = [
  { path : '', component: CassaComponent},
  { path : 'cassa', component : CassaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
