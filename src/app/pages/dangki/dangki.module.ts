import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangkiRoutingModule } from './dangki-routing.module';
import { DangkiComponent } from './dangki.component';

@NgModule({
  imports: [
    CommonModule,
    DangkiRoutingModule
  ],
  declarations: [DangkiComponent]
})
export class DangkiModule { }
