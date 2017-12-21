import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouter } from './app.router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { TophotComponent } from './template/tophot/tophot.component';
import { ThongtinComponent } from './template/thongtin/thongtin.component';
import { TheloaiComponent } from './components/theloai/theloai.component';
import{DatePipe} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TophotComponent,
    ThongtinComponent,
    TheloaiComponent,

  ],
  imports: [
    BrowserModule,
    appRouter,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
