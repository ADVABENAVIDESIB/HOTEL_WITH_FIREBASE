import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewHuespedPage } from './new-huesped.page';

const routes: Routes = [
  {
    path: '',
    component: NewHuespedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewHuespedPageRoutingModule {}
