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
        title: '样式 1',
        page: 'ProfileOnePage'
      },
      // {
      //    title: 'Type Two',
      //    page: 'ProfileTwoPage',
      //  },
      {
        title: '样式 2',
        page: 'ProfileThreePage'
      },
      {
        title: '样式 3',
        page: 'ProfileFourPage'
      },
      {
        title: '样式 4',
        page: 'ProfileFivePage'
      },
      {
        title: '用户信息设置',
        page: 'ProfileSettingsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
