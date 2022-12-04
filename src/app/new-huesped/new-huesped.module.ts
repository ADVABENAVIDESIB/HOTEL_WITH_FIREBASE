import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewHuespedPageRoutingModule } from './new-huesped-routing.module';

import { NewHuespedPage } from './new-huesped.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewHuespedPageRoutingModule
  ],
  declarations: [NewHuespedPage]
})
export class NewHuespedPageModule {}
