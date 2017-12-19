import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiUrl='http://www.nhasachsieutoc.somee.com/api/';

@Injectable()
export class UserService {

  constructor(public http: Http) { }

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.get(apiUrl+'DocGia/getDangNhap/'+credentials.SoDienThoai+'/'+credentials.MatKhau, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
            console.log(res.json());
          }, (err) => {
            reject(err);
            console.log(err);
          });
    });
  }

  getdocgia(id:string){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiUrl+'DocGias/getdocgia/'+id, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log(res.json());
      }, (err) => {
        reject(err);
        console.log(err);
      });
    })
  }

  getsachdamuon(id:string){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiUrl+'CTmuontra/getsachdamuon/'+id, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log(res.json());
      }, (err) => {
        reject(err);
        console.log(err);
      });
    })
  }

  getsachdangmuon(id:string){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiUrl+'CTmuontra/getsachdangmuon/'+id, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log(res.json());
      }, (err) => {
        reject(err);
        console.log(err);
      });
    })
  }

  getsachdatcoc(id:string){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiUrl+'CTmuontra/getsachdatcoc/'+id, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log(res.json());
      }, (err) => {
        reject(err);
        console.log(err);
      });
    })
  }

}
