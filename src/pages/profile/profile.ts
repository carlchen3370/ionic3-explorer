import { Component } from '@angular/core';

import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfileListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = 'ProfileListPage';
    this.menu.enable(true, 'menu-profile');
    this.items = [
      {
        title: '每日消息',
        page: 'ProfileOnePage'
      },
      {
        title: '朋友圈1',
        page: 'ProfileThreePage'
      },
      {
        title: '朋友圈2',
        page: 'ProfileFourPage'
      },
      {
        title: '联系方式展示',
        page: 'ProfileFivePage'
      },
      {
        title: '用户设置',
        page: 'ProfileSettingsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
