import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ListsPage';
    this.items = [
      {
        title: '设置列表',
        page : 'SettingsListPage'
      },
      {
        title: '可滑动列表项',
        page : 'SlidingItemPage'
      },
      {
        title: '可删除项目',
        page: 'DeleteItemsPage'
      },
      // {
      //   title: '有响应的列表标签Reactive List Label',
      //   page: 'ReactiveListLabelPage'
      // },
      {
        title: '头像列表',
        page: 'UsersPage'
      },
      {
        title: '彩色列表',
        page: 'CryptoListPage'
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
