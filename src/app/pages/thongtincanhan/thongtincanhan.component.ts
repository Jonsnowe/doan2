import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thongtincanhan',
  templateUrl: './thongtincanhan.component.html',
  styleUrls: ['./thongtincanhan.component.css']
})
export class ThongtincanhanComponent implements OnInit {
  private thongtinForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if (localStorage.getItem('user') != null) {
      let user: any = JSON.parse(localStorage.getItem('user'));
      this.thongtinForm = this.formBuilder.group({
        iddocgia: [user.IDDocGia],
        tendocgia: [user.TenDocGia],
        diachi: [user.DiaChi],
        email: [user.Email],
        matkhaucu: ['', Validators.required],
        matkhaumoi: ['', Validators.required],
        matkhaumoi_: ['', Validators.required],
      })
    }else{
      this.thongtinForm = this.formBuilder.group({
        iddocgia: [''],
        tendocgia: [''],
        diachi: [''],
        email: [''],
        matkhaucu: ['', Validators.required],
        matkhaumoi: ['', Validators.required],
        matkhaumoi_: ['', Validators.required],
      })
    }
  }

  submit() {
    console.log(this.thongtinForm.value)
  }

}
