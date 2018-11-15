import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-official-components',
  templateUrl: 'ionic-official-components.html'
})
export class IonicOfficialComponentsPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'CardListPage';

    this.items = [
      {
        title: '各种按钮',
        page: 'ButtonsListPage'
      },
      {
        title: '各种警告提示框',
        page: 'AlertsPage'
      },
      {
        title: '各种列表',
        page: 'ListPage'
      },
      {
        title: '各种卡片',
        page: 'CardsListPage'
      },
      {
        title: '各种滑动幻灯片',
        page: 'SlidesPage'
      },
      {
        title: '弹出的模态框',
        page: 'PopupModalsPage'
      },
      {
        title: '带导航的模态框',
        page: 'ModalWithNavigationPage'
      },
      {
        title: '侧边菜单',
        page: 'SideMenuPage'
      },
      {
        title: '浮动弹出菜单',
        page: 'PopupMenuListPage'
      },
      
    ];
  }


  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
