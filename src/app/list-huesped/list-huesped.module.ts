import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHuespedPageRoutingModule } from './list-huesped-routing.module';

import { ListHuespedPage } from './list-huesped.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHuespedPageRoutingModule
  ],
  declarations: [ListHuespedPage]
})
export class ListHuespedPageModule {}
