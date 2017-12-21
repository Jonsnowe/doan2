import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LichsugiaodichRoutingModule } from './lichsugiaodich-routing.module';
import { LichsugiaodichComponent } from './lichsugiaodich.component';
import { UserService } from '../../providers/user.service';
@NgModule({
  imports: [
    CommonModule,
    LichsugiaodichRoutingModule,
    NgbModule
  ],
  declarations: [LichsugiaodichComponent],
  providers:[UserService]
})
export class LichsugiaodichModule { }
