import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';
import { HttpClient } from '../../utils/HttpClient'
/*
  Generated class for the Login page.
*/
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home'
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { TestModel } from "../../models/user";
@Component({
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public httpDelegate: HttpClient) {
    this.form = new FormGroup({
      account: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
 //点击登录按钮
  loginClick() {
    var data = {
      'id' : '58b655ba99c25323cc1d4bae' , 
    }
    this.httpDelegate.getDataFromUrl('http://10.10.10.236:8809/find-resume', data, {}).then(model => {
        console.log(model.id)
    })
    
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
