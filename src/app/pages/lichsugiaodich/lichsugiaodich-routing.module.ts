import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichsugiaodichComponent } from './lichsugiaodich.component';

const routes: Routes = [
  {
    path:'',
    component:LichsugiaodichComponent
  }
];


export const LichsugiaodichRoutingModule=RouterModule.forChild(routes)
