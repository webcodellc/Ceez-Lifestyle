import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { SharedModule } from '../../shared.module';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the NewFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-new-friend',
  templateUrl: 'new-friend.html',
})
export class NewFriendPage extends BasePage{

  title: string = "New Friend";
  users: any = [];
  userid: string = "";
  friends: any = [];
  cloud_url: string = SharedModule.CLOUD_URL;

  constructor(public injector: Injector) {
    super(injector);

    this.userid = this.navParams.get("userid");
    this.friends = this.navParams.get("friends");

    this.server.getResult('Partygoers').subscribe((data) => {
      this.users = data;
    });
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  cancel() {
    this.navCtrl.pop();
  }

  addFriend() {
  }

  viewProfile(user) {
    this.navCtrl.push(ProfilePage, {
      title: user.username,
      userid: user.id,
      me: false
    });
  }

}
