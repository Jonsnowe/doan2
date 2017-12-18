import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SachComponent}from './sach.component'

const routes: Routes = [
  {
    path:'',
    component:SachComponent
  }
];


export const SachRoutingModule=RouterModule.forChild(routes)

