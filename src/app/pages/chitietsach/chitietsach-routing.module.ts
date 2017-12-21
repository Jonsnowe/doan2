import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietsachComponent } from './chitietsach.component';

const routes: Routes = [
  {
    path:'',
    component:ChitietsachComponent
  }
];


export const ChitietsachRoutingModule=RouterModule.forChild(routes)
