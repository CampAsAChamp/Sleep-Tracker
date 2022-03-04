import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StanfordModalPageRoutingModule } from './stanford-modal-routing.module';

import { StanfordModalPage } from './stanford-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StanfordModalPageRoutingModule
  ],
  declarations: [StanfordModalPage]
})
export class StanfordModalPageModule {}
