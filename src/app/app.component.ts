import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, NavController, ToastController, App } from 'ionic-angular';
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
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public app: App
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
      { title: '平台测试', component: 'MytestPage', active: false, icon: 'information-circle' },
      { title: '官方经典组件', component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
      { title: '高级组件', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },      
      { title: '菜单', component: 'MultMenuPage', active: false, icon: 'menu' },
      { title: '登陆页面', component: 'LoginListPage', active: false, icon: 'log-in' },      
      { title: '用户信息页面', component: 'ProfileListPage', active: false, icon: 'contact' },      
      { title: 'Native app 特性', component: 'IonicNativePage', active: false, icon: 'camera' },

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
      this.statusBar.backgroundColorByHexString('#333333');//设置状态栏的北京为灰色
      this.statusBar.styleLightContent();//设置状态栏的文字内容为浅色
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
      this.menuCtrl.enable(true, 'menu-material');

      //注册 android 平台的硬件返回按钮事件
      this.platform.registerBackButtonAction(() => {
        //获取NavController
        let activeNav: NavController = this.app.getActiveNavs()[0];
        //如果可以返回上一页，则执行pop
        if (activeNav.canGoBack()) {
          activeNav.pop();
        } else {
          this.showExitToast();
        }
      });      
    });
  }

  backButtonPressed: boolean = false;
  //退出应用方法
  private showExitToast(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 800,
            position: 'buttom'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 800);
    }
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
