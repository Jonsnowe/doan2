import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitietsach',
  templateUrl: './chitietsach.component.html',
  styleUrls: ['./chitietsach.component.css']
})
export class ChitietsachComponent implements OnInit {

  private apiUrl = 'http://www.nhasachsieutoc.somee.com/api/Sach/getsach/';
  data: any =
    {
      IDSach: "",
      IDTheLoai: "",
      IDTacGia: "",
      IDNhaXuatBan: "",
      TenSach: "",
      HinhAnh: "",
      NamXuatBan: 1,
      SoLuong: 1,
      SoLuongTon: 1,
      TriGia: 1.0,
      SoLanMuon: 1,
      MoTa: "sample string 7"
    }
  masach: string;
  constructor(
    private http: Http,
    // private router: Router,
    private route: ActivatedRoute, ) {
    console.log('ok');
  }


  ngOnInit(): void {
    this.route.params.subscribe((params => {
      this.masach = params['id'];
      this.getDataSach(this.masach)
        .toPromise().then(a => {
          this.data = a;
        })
    })
    )
  }

  // ngDoCheck(): void {
  //   if(this.masachmoi!==this.masachcu){
  //     this.Xuly();
  //   }
  // this.masachcu=this.masachmoi;
  // }

  Xuly() {
    this.route.params.subscribe(params => {
      this.getSach(params['id']);
    })
  }


  getDataSach(id: string) {
    return this.http.get(this.apiUrl + id)
      .map((res: Response) => res.json())
    // .toPromise().then(res=>console.log(res))
  }

  getSach(id: string) {
    this.getDataSach(id).subscribe(data => {
      // console.log(data);
      this.data = data
    })
  }





}
