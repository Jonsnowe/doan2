import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import{passMatchermoi} from'../../validators/khongtrung'
import{passMatchercu} from'../../validators/khongtrung'

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
    console.log("ngOnInit")
    if (localStorage.getItem('user') != null) {
      let user: any = JSON.parse(localStorage.getItem('user'));
      this.thongtinForm = this.formBuilder.group({
        iddocgia: [{value: user.IDDocGia, disabled: true}],
        tendocgia: [{value: user.TenDocGia, disabled: true}],
        diachi: [{value:user.DiaChi, disabled: true}],
        email: [{value:user.Email, disabled: true}],
        matkhaucu_: [{value:user.MatKhau}],
        matkhaucu: [null, Validators.required],
        matkhaumoi: [null, Validators.required],
        matkhaumoi_: [null, Validators.required],
      }, { validator: passMatchermoi, passMatchercu })
    }else{
      this.thongtinForm = this.formBuilder.group({
        iddocgia: [''],
        tendocgia: [''],
        diachi: [''],
        email: [''],
        matkhaucu: [null, Validators.required],
        matkhaumoi: [null, Validators.required],
        matkhaumoi_: [null, Validators.required],
      })
    }
  }

  ngDoCheck(): void {
  }

  submit() {
    console.log(this.thongtinForm.value.matkhaucu_)

  }

  // emailDomainValidator(control: FormControl) { 
  //   let email = control.value; 
  //   if (email && email.indexOf("@") != -1) { 
  //     let [_, domain] = email.split("@"); 
  //     if (domain !== "codecraft.tv") { 
  //       return {
  //         emailDomain: {
  //           parsedDomain: domain
  //         }
  //       }
  //     }
  //   }
  //   return null; 
  // }


}
