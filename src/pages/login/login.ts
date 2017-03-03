import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/*
  Generated class for the Login page.
*/
import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(public alertCtrl: AlertController) {
    this.form = new FormGroup({
      account: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
 //点击登录按钮
  loginClick() {
    let alert = this.alertCtrl.create({
      title: '温馨提示!',
      subTitle: '请填写密码!',
      buttons: ['OK']
    });
    /*if(){
     alert.present();
    }
    else{
    console.log(1)
    }*/
    alert.present();
  }

  
  
  processForm() {
    let alert = this.alertCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.account + " " + this.form.value.password,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }
 
}

