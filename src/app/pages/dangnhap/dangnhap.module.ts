import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{DangnhapComponent}from './dangnhap.component'
import { DangnhapRoutingModule } from './dangnhap-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DangnhapRoutingModule
  ],
  declarations: [DangnhapComponent]
})
export class DangnhapModule { }
