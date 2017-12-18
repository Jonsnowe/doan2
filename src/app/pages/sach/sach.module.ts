import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SachComponent}from './sach.component'
import { SachRoutingModule } from './sach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SachRoutingModule
  ],
  declarations: [SachComponent]
})
export class SachModule { }
