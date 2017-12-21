import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietsachComponent } from'./chitietsach.component'
import { ChitietsachRoutingModule } from './chitietsach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChitietsachRoutingModule
  ],
  declarations: [ChitietsachComponent]
})
export class ChitietsachModule { }
