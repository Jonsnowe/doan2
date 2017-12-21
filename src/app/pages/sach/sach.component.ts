import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.css']
})
export class SachComponent implements OnInit {
  private apiUrl = 'http://www.nhasachsieutoc.somee.com/api/Sach/GetSaches';
  data: any;

  constructor(private http: Http) {
    console.log('ok');
    this.getSach();
    this.getDataSach();
  }

  getDataSach(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getSach(){
    this.getDataSach().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
