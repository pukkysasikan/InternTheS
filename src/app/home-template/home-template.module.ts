import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTemplatePageRoutingModule } from './home-template-routing.module';

import { HomeTemplatePage } from './home-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomeTemplatePageRoutingModule
  ],
  declarations: [HomeTemplatePage]
})
export class HomeTemplatePageModule {}
