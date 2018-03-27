import { Component, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { SharedModule } from '../../shared.module';
import { UserData } from '../../providers/userdata/userdata';
import * as $ from 'jquery';
import { NewFriendPage } from '../new-friend/new-friend';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage extends BasePage{

  title: string = "Your Profile";
  userid: string;
  me: boolean;
  id: string;
  src: string;
  name: string;
  age: string;
  location: string;
  attended: string;
  avatar: any = "";
  cloud_url: string = SharedModule.CLOUD_URL;
  edit: boolean = false;
  friends: any = [];

  constructor(public injector: Injector, public userData: UserData) {
    super(injector);

    console.log(this.navParams);

    this.userid = this.navParams.get("userid");
    this.me = this.navParams.get("me");

    this.server.getResult('Partygoers/' + this.userid).subscribe((data) => {
      this.src = data.profileImage;
      this.name = data.username;
      this.id = data.id;
      this.age = data.age;
      this.location = data.location;
      this.attended = "32";

      if(!this.me)
        this.title = this.name;

      if(!data.friends)
        return;
      
      this.server.getResult('Partygoers').subscribe((resp) => {
        resp.forEach((user) => {
          
          let isFriend = false;

          data.friends.forEach((friend) => {
            if(friend == user.id) {
              isFriend = true;
            }
          });

          if(isFriend)
            this.friends.push(user);
        });
      });
    });
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  addFriends() {
    this.navCtrl.push(NewFriendPage);
  }

  addFriend() {
    let accessToken = this.userData.getAccessToken();

    this.userData.user.friends.push(this.userid);

    this.server.putResult('Partygoers/' + this.userData.user.id, {
      friends: this.userData.user.friends,
    }, accessToken).subscribe((resp) => {
      this.showToast(this.name + " is your friend now!");
      this.navCtrl.pop();
    });
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  updateEdit() {
    this.showLoadingView();

    let accessToken = this.userData.getAccessToken();
    this.server.putResult('Partygoers/' + this.userid, {
      usrename: this.name,
      age: this.age,
      location: this.location,
    }, accessToken).subscribe((resp) => {      
      this.showContentView();
      this.edit = false;
    });
  }

  triggerAvatar() {
    if(this.edit) {
      $("#file_avatar").click();
    }
  }

  uploadAvatar($event) {
    let imagePath = $("#file_avatar").val();
    let accessToken = this.userData.getAccessToken();
    let files = $event.target.files;

    // Create a formdata object and add the files
    var data = new FormData();

    data.append("upload_preset", SharedModule.UPLOAD_CLOUD_PRESET);
    data.append("tags", this.userid);
    data.append("file", files[0]);

    var thisObj = this;

    $.ajax({
        url: SharedModule.UPLOAD_CLOUD_URL,
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR)
        {
          thisObj.showContentView();
          thisObj.server.putResult('Partygoers/' + thisObj.userid, {
            profileImage: data.public_id
          }, accessToken).subscribe((resp) => {
            thisObj.src = resp.profileImage;
          });
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          thisObj.showContentView();
          thisObj.showErrorView();
        }
    });

    this.showLoadingView();
  }

  viewProfile(user) {
    this.navCtrl.push(ProfilePage, {
      title: user.username,
      userid: user.id,
      me: false
    });
  }

}
