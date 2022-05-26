import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTemplate2Page } from './form-template2.page';

const routes: Routes = [
  {
    path: '',
    component: FormTemplate2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTemplate2PageRoutingModule {}
