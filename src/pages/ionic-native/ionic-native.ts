import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-native',
  templateUrl: 'ionic-native.html',
})
export class IonicNativePage {

  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'IonicNativePage';

    this.items = [
      {
        title: '条码扫描（包括一维和二维码）',
        page: 'BarcodeScannerPage'
      },
      // {
      //   title: '信用卡扫描',
      //   page: 'CreditCardScanPage'
      // },
      {
        title: '从 相机/相册 获取照片',
        page: 'GetImagePage'
      },
      // {
      //   title: 'Google Maps',
      //   page: 'NativeGoogleMapsPage'
      // },
      {
        title: '运行时权限获取',
        page: 'RuntimePermissionsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
