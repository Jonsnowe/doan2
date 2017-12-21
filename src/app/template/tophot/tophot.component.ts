import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tophot',
  templateUrl: './tophot.component.html',
  styleUrls: ['./tophot.component.css']
})
export class TophotComponent implements OnInit {
  private apiUrl = 'http://www.nhasachsieutoc.somee.com/api/Sach/GetSachSoLanMuonTop10';
  data: any;

  constructor(private http: Http) {
    console.log('ok');
    this.get10Sach();
    this.getData10Sach();
  }

  getData10Sach(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  get10Sach(){
    this.getData10Sach().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
