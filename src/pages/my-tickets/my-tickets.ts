import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { EventDetailPage } from '../event-detail/event-detail';
import { SharedModule } from '../../shared.module';

/**
 * Generated class for the MyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTicketsPage extends BasePage{

  title: string = "My Tickets";
  events: Array<{
    id: string,
    src: string,
    title: string,
    date: string,
    venue: string,
    address: string,
  }> = [];
  cloud_url = SharedModule.CLOUD_URL;

  constructor(public injector: Injector) {
    super(injector);
  }

  ionViewDidEnter() {
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

}
