import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { EventDetailPage } from '../event-detail/event-detail';
import { SharedModule } from '../../shared.module';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage extends BasePage{

  title: string = "Events";
  events: any = [];
  cloud_url = SharedModule.CLOUD_URL;

  constructor(public injector: Injector) {
    super(injector);
  }

  ionViewDidEnter() {
    this.loadOutings();
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  gotoEvent(id) {
    this.navCtrl.push(EventDetailPage, id);
  }

  loadOutings() {
    this.showLoadingView();
    this.server.getResult("Outings?").subscribe((data) => {
      if(data.length > 0) {
        this.events = data;
        this.showContentView();
      }
    });
  }
}
