import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];

    this.pages = [
      //{ title: '介绍', component: 'HomePage', active: true, icon: 'home' },
      { title: '登陆页面', component: 'LoginListPage', active: false, icon: 'archive' },      
      { title: '用户信息页面', component: 'ProfileListPage', active: false, icon: 'camera' },
      { title: '官方经典组件', component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
      { title: '各种其他组件', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },      
      //{ title: '各种列表', component: 'ListPage', active: false, icon: 'body' },
      { title: 'Native app 特性', component: 'IonicNativePage', active: false, icon: 'ionic' },
      { title: '我的测试页', component: 'MytestPage', active: false, icon: 'musical-notes' },
      //{ title: '弹出的模态框', component: 'PopupModalsPage', active: false, icon: 'basket' },
      //{ title: '带导航的模态框', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
      
      //{ title: '侧边菜单', component: 'SideMenuPage', active: false, icon: 'bookmark' },
      //{ title: '弹出菜单', component: 'PopupMenuListPage', active: false, icon: 'beer' }, 
      //{ title: '时间线', component: 'TimelinePage', active: false, icon: 'calendar' },
      //{ title: '各种滑动幻灯片', component: 'SlidesPage', active: false, icon: 'contact' },
      //{ title: '主题变更', component: 'ThemingPage', active: false, icon: 'power' },
    ];

    //设置菜单的选中项目
    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
      this.menuCtrl.enable(true, 'menu-material');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
