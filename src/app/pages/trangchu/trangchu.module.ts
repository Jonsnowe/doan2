import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrangchuComponent} from'./trangchu.component'
import { TrangchuRoutingModule } from './trangchu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrangchuRoutingModule
  ],
  declarations: [TrangchuComponent]
})
export class TrangchuModule { }
