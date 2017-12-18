import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent implements OnInit {

  public theloais: any[];
  constructor() { }

  ngOnInit() {
    // this.theloais = [
    //   {
    //     matheloai: 1, tentheloai: "Thể loại 1"
    //   },
    //   {
    //     matheloai: 2, tentheloai: "Thể loại 2"
    //   },
    //   {
    //     matheloai: 3, tentheloai: "Thể loại 3"
    //   },
    //   {
    //     matheloai: 4, tentheloai: "Thể loại 4"
    //   },
    //   {
    //     matheloai: 5, tentheloai: "Thể loại 5"
    //   },
    // ]
  }

}
