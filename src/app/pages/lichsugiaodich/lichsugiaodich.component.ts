import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { Sach } from '../../entities/sach.entities';
import { CTMuonTra } from '../../entities/ctmuontra.entities';
import { DatePipe } from '@angular/common'
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-lichsugiaodich',
  templateUrl: './lichsugiaodich.component.html',
  styleUrls: ['./lichsugiaodich.component.css']
})
export class LichsugiaodichComponent implements OnInit {

  user: any;
  datcoc: Sach[] = []
  damuon: Sach[] = []
  dangmuon: Sach[] = []
  CTdatcoc: CTMuonTra[];
  CTdamuon: CTMuonTra[];
  CTdangmuon: CTMuonTra[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('user') != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userservice.getchitietmuontraDocgia(this.user.IDDocGia)
        .then(res => {
          this.CTdatcoc = res.filter(s => s.TinhTrangMuon == 0);//đang đặt
          this.CTdangmuon = res.filter(s => s.TinhTrangMuon == 1);//dang mượn
          this.CTdamuon = res.filter(s => s.TinhTrangMuon == 2 || s.TinhTrangMuon==3);//đã trả
          // console.log(res.filter(s => s.TinhTrangMuon == 0))
          // console.log(res.filter(s => s.TinhTrangMuon == 1))
          // console.log(res.filter(s => s.TinhTrangMuon == 2))
          // console.log(res.filter(s => s.TinhTrangMuon == 3))
        }).then(() => {

          this.CTdatcoc.forEach(e => {
            this.userservice.getsach(e.IDSach).then(res => {
              if (this.datcoc.filter(s => s.IDSach == res.IDSach).length === 0) {
                this.datcoc.push(res)
              }
              // console.log(res)
            })
          })
          this.CTdangmuon.forEach(e => {
            this.userservice.getsach(e.IDSach).then(res => {
              if (this.dangmuon.filter(s => s.IDSach == res.IDSach).length === 0) {
                this.dangmuon.push(res)
              }

              console.log(res)
            })
          })
          this.CTdamuon.forEach(e => {
            this.userservice.getsach(e.IDSach).then(res => {
              if (this.damuon.filter(s => s.IDSach == res.IDSach).length === 0) {
                this.damuon.push(res)
              }
              console.log(res)
            })
            console.log(e)
          })

        })
      // this.userservice.getsachdamuon(this.user.IDDocGia).then(res=>{
      //   console.log(res);
      // })
      // this.userservice.getsachdangmuon(this.user.IDDocGia).then(res=>{
      //   console.log(res);
      // })
    }
  }

}
