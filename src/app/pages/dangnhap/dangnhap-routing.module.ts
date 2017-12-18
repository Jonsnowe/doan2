import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap.component';


const routes: Routes = [
  {
    path:'',
    component:DangnhapComponent
  }
];


export const DangnhapRoutingModule=RouterModule.forChild(routes)