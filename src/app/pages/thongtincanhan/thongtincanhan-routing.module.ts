import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThongtincanhanComponent } from './thongtincanhan.component';

const routes: Routes = [
  {
    path:'',
    component:ThongtincanhanComponent
  }
];

export const ThongtincanhanRoutingModule=RouterModule.forChild(routes)
