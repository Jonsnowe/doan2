import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LichsugiaodichRoutingModule } from './lichsugiaodich-routing.module';
import { LichsugiaodichComponent } from './lichsugiaodich.component';

@NgModule({
  imports: [
    CommonModule,
    LichsugiaodichRoutingModule,
    NgbModule
  ],
  declarations: [LichsugiaodichComponent]
})
export class LichsugiaodichModule { }
