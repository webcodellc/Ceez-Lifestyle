import { Component, ViewChild, ElementRef, Injector, Provider } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { SharedModule } from '../../shared.module';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { AudioProvider } from 'ionic-audio';
import * as $ from 'jquery';
import { LoginPage } from '../login/login';


/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})

export class EventDetailPage extends BasePage{

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  id: string;
  title: string;
  src: string;
  sound_src: string;
  date: string;
  venue: string;
  address: string;
  genre: string;
  venue_type: string;
  price: number;
  location: {
    lat: number;
    lng: number;
  }

  progress: number = 0;
  play: boolean = false;
  csecond: string = "00";
  cminitue: string = "00";
  tsecond: string = "00";
  tminitue: string = "00";
  timer: any;

  cloud_url = SharedModule.CLOUD_URL;
  audio_cloud_url: string = SharedModule.AUDIO_CLOUD_URL;

  constructor(public injector: Injector, private payPal: PayPal, private audioProvider: AudioProvider) {
    super(injector);

    this.id = this.navParams.data;

    this.server.getResult("Outings/" + this.id).subscribe((data) => {
      this.title = data.name;
      this.src = data.public_id;
      this.date = data.date;
      this.venue = data.venue;
      this.address = data.address;
      this.genre = data.genre;
      this.venue_type = data.venue_type;
      this.sound_src = data.sound_id;
      this.price = data.price;
      this.location = {
        lat: data.location.lat,
        lng: data.location.lng,
      }
      this.initMap();
    });

    this.payPal = injector.get(PayPal);
  }

  StartTimer() {
    this.timer = setTimeout(x => 
    {
      if(!this.play)
        return;

      let duration = $('#audio')[0].duration;
      let curTime = $('#audio')[0].currentTime;
      this.progress = Math.round(curTime / duration * 100);

      this.csecond = this.getDuraton(curTime % 60);
      this.cminitue = this.getDuraton(curTime / 60);

      if(this.progress == 100) {
        this.play = false;
        this.progress = 0;
      }

      this.StartTimer();
    }, 1000);
  }

  initMap() {
    var position = new google.maps.LatLng(this.location.lat, this.location.lng);

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      disableDefaultUI: true,
      center: position
    });

    new google.maps.Marker({position: position, title: 'Opens at: 7:am'}).setMap(this.map);
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  cancel() {
    this.navCtrl.pop();
  }

  Purchase() {
    if(!this.userData.getUserInfo()) {
      this.navCtrl.pop();
      this.navCtrl.push(LoginPage);
      return;
    }
    this.payPal.init({
      PayPalEnvironmentProduction: SharedModule.Paypal_production_id,
      PayPalEnvironmentSandbox: SharedModule.Paypal_sandbox_id
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      })).then(() => {
        let payment = new PayPalPayment(this.price.toString(), 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((data) => {
          let response = data.response;
          let accessToken = this.userData.getAccessToken();
          this.server.postResult('RSVPs',  {
            pay_id: response.id,
            ownerId: this.userData.getUserInfo(),
            outingId: this.id,
            create_time: response.create_time,
            state: response.state
          }, accessToken).subscribe((resp) => {
            this.showToast('You registered!');
            this.navCtrl.pop();
          })
        }, (err) => {
        });
      }, (err) => {
      });
    }, (err) => {
    });
  }

  togglePlay() {
    this.play = !this.play;
    let duration = $('#audio')[0].duration;
    if(this.play) {
      this.StartTimer();
      this.tsecond = this.getDuraton(duration % 60);
      this.tminitue = this.getDuraton(duration / 60);
      $('#audio')[0].play();
    }
    else {
      $('#audio')[0].pause();
    }
  }

  getDuraton(duration) {
    let second = Math.round(duration);
    var ssecond = second.toString();
    if(second < 10)
      ssecond = "0" + ssecond;
    return ssecond;
  }

}
