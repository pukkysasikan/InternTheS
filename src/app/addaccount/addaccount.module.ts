import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaccountPageRoutingModule } from './addaccount-routing.module';

import { AddaccountPage } from './addaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddaccountPageRoutingModule
  ],
  declarations: [AddaccountPage]
})
export class AddaccountPageModule {}
