import { Injector } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams,
  AlertController, MenuController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
import { UserData } from '../../providers/userdata/userdata';

export abstract class BasePage {

  public isErrorViewVisible: boolean;
  public isEmptyViewVisible: boolean;
  public isContentViewVisible: boolean;
  public isLoadingViewVisible: boolean;
  public server: ServerProvider;

  protected refresher: any;
  protected infiniteScroll: any;
  protected navCtrl: NavController;
  protected navParams: NavParams;
  protected userData: UserData;

  private loader: any;
  private toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;

  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.server = injector.get(ServerProvider);
    this.navParams = injector.get(NavParams);
    this.userData = injector.get(UserData);

    let menu = injector.get(MenuController);
    menu.swipeEnable(true);
  }

  showLoadingView(loadingText: string = 'Loading...') {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isContentViewVisible = false;
    this.isLoadingViewVisible = true;

    this.loader = this.loadingCtrl.create({
      content: `<p class="item">${loadingText}</p>`,
    });
    this.loader.present();
  }

  showContentView() {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = true;

    this.loader.dismiss();
  }

  showEmptyView() {

    this.isErrorViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = true;

    this.loader.dismiss();
  }

  showErrorView() {

    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isErrorViewVisible = true;

    this.loader.dismiss();
  }

  onRefreshComplete(data = null) {

    if (this.refresher) {
      this.refresher.complete()
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();

      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  showConfirm(title: string, message: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['Dismiss']
      });

      confirm.present();
    });
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.push(page, params);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
