import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanfordModalPage } from './stanford-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StanfordModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanfordModalPageRoutingModule {}
