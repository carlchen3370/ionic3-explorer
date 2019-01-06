import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@ang';
/**
 * Generated class for the MultMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mult-menu',
  templateUrl: 'mult-menu.html',
})
export class MultMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items: Array<{ title: string, page: any }>;
  ionViewDidLoad() {
    //console.log('ionViewDidLoad MultMenuPage');
    this.items = [
      {
        title: '弹出菜单1',
        page: 'PopupMenuOnePage'
      },
      {
        title: '弹出菜单2',
        page: 'PopupMenuTwoPage'
      },
      {
        title: '侧边菜单',
        page: 'SideMenuPage'
      },
    ];    
  }


  itemTapped(event, item) {
    this.navCtrl.push(item.page, {sn: '23esew'});
  }
}
