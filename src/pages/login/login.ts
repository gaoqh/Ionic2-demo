import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/*
  Generated class for the Login page.
=======

import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
>>>>>>> 4037f1500d4f1e8611b315dcf86164491da395f5

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

<<<<<<< HEAD
  url = '/project/app/mobileLoginAction.do';
  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http) {}
=======
  processForm() {
    let alert = this.alertCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.account + " " + this.form.value.password,
      buttons: [{
        text: 'Ok',
      }]
    });
>>>>>>> 4037f1500d4f1e8611b315dcf86164491da395f5

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }
  //点击登录按钮
  loginClick() {
    this.http
  }
}

