import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { ThongtincanhanRoutingModule } from './thongtincanhan-routing.module';
import { ThongtincanhanComponent } from './thongtincanhan.component';

@NgModule({
  imports: [
    CommonModule,
    ThongtincanhanRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [ThongtincanhanComponent]
})
export class ThongtincanhanModule { }
