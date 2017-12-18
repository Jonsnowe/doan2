import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  private dangnhapForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.dangnhapForm=this.formBuilder.group({
      SoDienThoai:[],
      MatKhau:[]
    })
   }

  ngOnInit() {
  }

  submit(){
    console.log( this.dangnhapForm.value)
  }
}
