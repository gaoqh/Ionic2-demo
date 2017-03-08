/**
 * Created by  on 2017/2/25.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { TestModel } from '../models/user';
import { HTTP } from 'ionic-native'
/*
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()

export class HttpClient {
      constructor(public http: Http)
  {
  }


  getDataFromUrl(url: string, body: any, headers: any): Promise<TestModel> {
      console.log('sendRequest')
      return HTTP.post(url, body,headers).then(res => {
          console.log(res.data);
          return <TestModel>JSON.parse(res.data)
      })
    //   return this.http.post(url, body).map(res => <TestModel>(res.json()));
  }

  

}