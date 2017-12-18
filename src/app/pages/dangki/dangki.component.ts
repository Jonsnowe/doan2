import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  private dangkiForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder) { 
    
    this.dangkiForm=this.formBuilder.group({
      SoDienThoai:[],
      MatKhau:[],
      TenDocGia:[],
      Email:[],
      DiaChi:[''],
      CMND:[''],
    })
  }

  ngOnInit() {
  }
  submit(){
    console.log( this.dangkiForm.value);
  }

}
