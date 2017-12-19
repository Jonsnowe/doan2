import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  daDangnhap: boolean;
  tenuser:string;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if (localStorage.getItem('user') == null) {
      this.daDangnhap = false;
      this.tenuser=""
    } else {
      this.daDangnhap = true;
      this.tenuser= JSON.parse(localStorage.getItem('user')).TenDocGia;
    }
  }

  dangxuat() {
    console.log("dangxuat");
    localStorage.removeItem('user')

    if (this.location.path() == '/lichsugiaodich' || this.location.path() == '/thongtincanhan') {
      this.router.navigate(['/']);
    }
  }
}
