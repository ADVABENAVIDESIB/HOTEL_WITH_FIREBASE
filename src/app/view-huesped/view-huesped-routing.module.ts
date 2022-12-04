import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHuespedPage } from './view-huesped.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHuespedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHuespedPageRoutingModule {}
