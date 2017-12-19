import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  private dangnhapForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public userservice: UserService,
    private _router: Router
  ) {
    this.dangnhapForm=this.formBuilder.group({
      SoDienThoai:['',Validators.required],
      MatKhau:['',Validators.required]
    })
   }

  ngOnInit() {
  }

  submit(){
    console.log( this.dangnhapForm.value)
    this.userservice.login(this.dangnhapForm.value).then((res)=>{
      // console.log(res)
      localStorage.setItem('user', JSON.stringify(res));
      if(res!=null){
        this._router.navigate(['/']);
      }
    })
  }
}
