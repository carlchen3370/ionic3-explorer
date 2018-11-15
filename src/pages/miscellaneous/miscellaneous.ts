import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-miscellaneous',
  templateUrl: 'miscellaneous.html'
})
export class MiscellaneousListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.items = [
      {
        title: '自适应文本输入',
        page: 'AutosizingTextarea'
      },
      {
        title: '手风琴折叠列表',
        page: 'AccordionListPage'
      },
      {
        title: '博客页面',
        page: 'BlogPostPage'
      },
      {
        title: '浮动按钮 弹出框',
        page: 'PopupFabPage'
      },
      {
        title: '图表',
        page: 'ChartsPage'
      },
      {
        title: '聊天',
        page: 'ChatsPage'
      },
      {
        title: '音乐会卡片',
        page: 'ConcertCardPage'
      },
      {
        title: '倒计时秒表',
        page: 'CountdownPage'
      },
      {
        title: '可隐藏页面头-手机上ok',
        page: 'ExpandableHeaderPage'
      },
      {
        title: '翻转卡片',
        page: 'FlashCardPage'
      },
      {
        title: '堆叠卡片',
        page: 'MasonryCardsPage'
      },
      {
        title: '房产信息列表',
        page: 'RealEstateListingPage'
      },
      {
        title: '图片感言',
        page: 'TestimonialsPage'
      },
      {
        title: 'Tinder样式的卡片（赞或不赞选择）',
        page: 'TinderCardsPage'
      },
      {
        title: '条目勋章（角标）',
        page: 'ItemRibbonPage'
      },
      {
        title: '时间线',
        page: 'TimelinePage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
