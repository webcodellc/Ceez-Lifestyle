import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServerProvider } from '../providers/server/server';
import { UserData } from '../providers/userdata/userdata';
import { EventsNearYouPage } from '../pages/events-near-you/events-near-you';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = EventsNearYouPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
      userData: UserData, server: ServerProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      userData.loadPreferences().then(() => {
        var userid = userData.getUserInfo();
        if(userid) {
          userData.getUser(userid);
        }
      });
    });
  }
}