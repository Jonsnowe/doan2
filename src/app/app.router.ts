import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ThongtinComponent } from './template/thongtin/thongtin.component';

export const routes: Routes = [
  {
    path:'',
    loadChildren:'app/pages/trangchu/trangchu.module#TrangchuModule'
  },
  {
    path:'sach',
    loadChildren:'app/pages/sach/sach.module#SachModule'
  },
  {
    path:'dangki',
    loadChildren:'app/pages/dangki/dangki.module#DangkiModule'
  },
  {
    path:'dangnhap',
    loadChildren:'app/pages/dangnhap/dangnhap.module#DangnhapModule'
  },
  {
    path:'thongtincanhan',
    loadChildren:'app/pages/thongtincanhan/thongtincanhan.module#ThongtincanhanModule'
  },
  {
    path:'lichsugiaodich',
    loadChildren:'app/pages/lichsugiaodich/lichsugiaodich.module#LichsugiaodichModule'
  },
  { path: 'thongtin', component:  ThongtinComponent},
];


export const appRouter:ModuleWithProviders =RouterModule.forRoot(routes)