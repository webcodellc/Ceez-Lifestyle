import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { DashboardPage } from '../dashboard/dashboard';
import { NewEventPage } from '../new-event/new-event';
import { EventsNearYouPage } from '../events-near-you/events-near-you';
import { LoginPage } from '../login/login';
import { EventsPage } from '../events/events';
import { ProfilePage } from '../profile/profile';
import { MyTicketsPage } from '../my-tickets/my-tickets';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage extends BasePage{

  user: any;

  constructor(public injector: Injector) {
    super(injector);
    this.user = this.userData.user;
  }

  close() {
    this.navCtrl.pop();
  }

  gotoDashboard() {
    this.navCtrl.pop();
    this.navCtrl.push(DashboardPage);
  }

  gotoProfile() {
    this.navCtrl.pop();
    this.navCtrl.push(ProfilePage, {
      userid: this.user.id,
      me: true
    });
  }

  gotoEvents() {
    this.navCtrl.pop();
    this.navCtrl.push(EventsPage);
  }

  gotoNewEvent() {
    this.navCtrl.pop();
    this.navCtrl.push(NewEventPage);
  }

  gotoNearEvents() {
    this.navCtrl.pop();
    this.navCtrl.push(EventsNearYouPage);
  }

  gotoMyTickets() {
    this.navCtrl.pop();
    this.navCtrl.push(MyTicketsPage);
  }

  login() {
    this.navCtrl.pop();
    this.navCtrl.push(LoginPage);
  }

  logout() {
    this.navCtrl.pop();
    this.userData.setUserInfo(null);
    this.gotoNearEvents();
  }
}
