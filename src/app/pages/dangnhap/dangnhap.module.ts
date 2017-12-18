import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{DangnhapComponent}from './dangnhap.component'
import { DangnhapRoutingModule } from './dangnhap-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DangnhapRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DangnhapComponent]
})
export class DangnhapModule { }
