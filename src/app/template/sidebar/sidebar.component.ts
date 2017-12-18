import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public theloais: any[];
  public searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.searchForm=this.formBuilder.group({
      searchString:[''],
      searchTacgia:[''],
      searchTheloai:['0']
    })
   }

  ngOnInit() {
    this.theloais = [
      {
        matheloai: 1, tentheloai: "Thể loại 1"
      },
      {
        matheloai: 2, tentheloai: "Thể loại 2"
      },
      {
        matheloai: 3, tentheloai: "Thể loại 3"
      },
      {
        matheloai: 4, tentheloai: "Thể loại 4"
      },
      {
        matheloai: 5, tentheloai: "Thể loại 5"
      },
    ]
  }

  Search_(){
    console.log(this.searchForm.value);
  }
}
