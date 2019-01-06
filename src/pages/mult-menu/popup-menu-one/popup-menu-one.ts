import { Component } from '@angular/core';
import { Location} from '@angular/common'
import { NavController, IonicPage, Platform } from 'ionic-angular';
import * as queryString from 'query-string';

@IonicPage()
@Component({
  selector: 'page-popup-menu-one',
  templateUrl: 'popup-menu-one.html'
})
export class PopupMenuOnePage {
  openMenu = false;
  platf: string = "";
  urlQuery: string = "";
  constructor(public navCtrl: NavController, 
    public platform: Platform,
    public location: Location
    ) {

    this.platf = JSON.stringify( platform.platforms());
    this.urlQuery = JSON.stringify( queryString.parseUrl(location.path()).query);

   }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }
}
