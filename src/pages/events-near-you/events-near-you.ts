import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { EventDetailPage } from '../event-detail/event-detail';
import { Geolocation } from '@ionic-native/geolocation';
import { SharedModule } from '../../shared.module';

/**
 * Generated class for the EventsNearYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events-near-you',
  templateUrl: 'events-near-you.html',
})
export class EventsNearYouPage extends BasePage{

  title: string = "Events Near You";
  events: Array<{
    id: string,
    src: string,
    title: string,
    date: string,
    venue: string,
    address: string,
  }> = [];
  cloud_url = SharedModule.CLOUD_URL;

  constructor(public injector: Injector, private geolocation: Geolocation) {
    super(injector);
    
    geolocation = new Geolocation();
    geolocation.getCurrentPosition().then((position) => {
      let location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      this.showLoadingView();

      this.server.getResult("Outings/nearby?here=" + JSON.stringify(location) + "&max=10000").subscribe((data) => {
        if(data.length > 0) {
          data.forEach((event) => {
            this.events.push({
              id: event.id,
              src: event.public_id,
              title: event.name,
              date: event.date,
              venue: event.venue,
              address: event.address
            });
          })
        }
        this.showContentView();
      });
    });
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  gotoEvent(id) {
    this.navCtrl.push(EventDetailPage, id);
  }

}
