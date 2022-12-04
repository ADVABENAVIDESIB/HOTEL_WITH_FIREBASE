import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHuespedPage } from './list-huesped.page';

const routes: Routes = [
  {
    path: '',
    component: ListHuespedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHuespedPageRoutingModule {}
