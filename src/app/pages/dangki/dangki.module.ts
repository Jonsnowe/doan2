import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { DangkiRoutingModule } from './dangki-routing.module';
import { DangkiComponent } from './dangki.component';

@NgModule({
  imports: [
    CommonModule,
    DangkiRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DangkiComponent]
})
export class DangkiModule { }
