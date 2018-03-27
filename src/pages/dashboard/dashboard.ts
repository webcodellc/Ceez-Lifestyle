import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { NewEventPage } from '../new-event/new-event';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage extends BasePage{

  title: string = "Dashboard";

  constructor(public injector: Injector) {
    super(injector);
  }

  createNewEvent() {
    this.navigateTo(NewEventPage);
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

}
