import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PayPal } from '@ionic-native/paypal';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ServerProvider } from '../providers/server/server';
import { UserData } from '../providers/userdata/userdata';
import { NewEventPage } from '../pages/new-event/new-event';
import { MenuPage } from '../pages/menu/menu';
import { EventsNearYouPage } from '../pages/events-near-you/events-near-you';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventsPage } from '../pages/events/events';
import { ProfilePage } from '../pages/profile/profile';
import { NewFriendPage } from '../pages/new-friend/new-friend';
import { MyTicketsPage } from '../pages/my-tickets/my-tickets';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    DashboardPage,
    NewEventPage,
    EventsNearYouPage,
    EventDetailPage,
    EventsPage,
    ProfilePage,
    NewFriendPage,
    MyTicketsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(defaultAudioProviderFactory), 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    DashboardPage,
    NewEventPage,
    EventsNearYouPage,
    EventDetailPage,
    EventsPage,
    ProfilePage,
    NewFriendPage,
    MyTicketsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider,
    UserData,
    Geolocation,
    PayPal
  ]
})

export class AppModule {}
