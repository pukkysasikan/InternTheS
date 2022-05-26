import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTemplate2PageRoutingModule } from './form-template2-routing.module';

import { FormTemplate2Page } from './form-template2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormTemplate2PageRoutingModule
  ],
  declarations: [FormTemplate2Page]
})
export class FormTemplate2PageModule {}
