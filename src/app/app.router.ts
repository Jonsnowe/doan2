import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

export const routes: Routes = [
  {
    path:'',
    loadChildren:'app/pages/trangchu/trangchu.module#TrangchuModule'
  }
];


export const appRouter:ModuleWithProviders =RouterModule.forRoot(routes)