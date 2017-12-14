import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu.component';

const routes: Routes = [
  {
    path:'',
    component:TrangchuComponent
  }
];


export const TrangchuRoutingModule=RouterModule.forChild(routes)
