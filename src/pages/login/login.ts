import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  url = '/project/app/mobileLoginAction.do';
  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //点击登录按钮
  loginClick() {
    this.http
  }

}
