import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location: Location,private router: Router){}
  title = 'app';
  showSidebar:boolean;
   ngDoCheck(): void {
 
      if(this.location.path() != '/lichsugiaodich'){
        this.showSidebar=true;
      } else {
        this.showSidebar=false;
      }

    // console.log(this.location.path())
  }
}
