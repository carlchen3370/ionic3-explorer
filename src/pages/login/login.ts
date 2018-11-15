import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'LoginListPage';
    this.items = [
      {
        title: '普通登陆页面',
        page:  'LoginOnePage'
      },
      {
        title: 'Instagram 样式',
        page:  'LoginInstagramPage'
      },
      {
        title: '滑动文字',
        page:  'LoginSliderPage'
      },
      {
        title: '背景图片播放',
        page:  'LoginBackgroundSliderPage'
      },      
      {
        title: '带背景视频',
        page:  'LoginBackgroundVideoPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
