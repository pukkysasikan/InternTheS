import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDialogTemplatePageRoutingModule } from './cart-dialog-template-routing.module';

import { CartDialogTemplatePage } from './cart-dialog-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CartDialogTemplatePageRoutingModule
  ],
  declarations: [CartDialogTemplatePage]
})
export class CartDialogTemplatePageModule {}
