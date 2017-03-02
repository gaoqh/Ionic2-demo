import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Broadcaster } from 'ionic-native'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
      
  }
  //MARK: - 生命周期方法
  ionViewWillEnter() {
    // this.navCtrl.push(DetailPage)
  }

   openCamera(){

    	var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType:0,//0对应打开相册
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    Camera.getPicture(options).then((imageData) => {
      let base64Image =  imageData;
      alert(base64Image);
    });
  }
  //
	addObserver(){
		Broadcaster.addEventListener('nativeToJs').forEach(() => this.navCtrl.push(DetailPage))
	}
  //跳转到苹果原生页面
  toApplePage() {
    Broadcaster.fireNativeEvent('jsToNative',{ item:'test data' }).then(() => console.log('Success'));
  }
}