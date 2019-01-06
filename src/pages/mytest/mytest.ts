import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MytestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytest',
  templateUrl: 'mytest.html',
})
export class MytestPage {

  platf: string;
  constructor(
    public platform: Platform
    ) {
      this.platf = JSON.stringify(this.platform.platforms());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytestPage');
  }

}
