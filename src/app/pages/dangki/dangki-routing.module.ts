import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangkiComponent } from './dangki.component';

const routes: Routes = [
  {
    path:'',
    component:DangkiComponent
  }
];


export const DangkiRoutingModule=RouterModule.forChild(routes)
