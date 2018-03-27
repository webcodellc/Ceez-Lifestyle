import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ServerProvider } from '../../providers/server/server';


@Injectable()
export class UserData {

  data = {};

  user : {
    id: string,
    name: string,
    email: string,
    friends: Array<string>,
    isAdmin: boolean,
    isPromoter: boolean,
    isPhotographer: boolean,
  } = {
    id: "",
    name: "",
    email: "",
    friends: [],
    isAdmin: false,
    isPromoter: false,
    isPhotographer: false,
  };
  
  constructor(
    public storage: Storage,
    public server: ServerProvider,
  ) {
  }

  savePreferences() {
    this.storage.set('ceezNightLife', this.data);
  }
  
  loadPreferences() {
    return this.storage.get('ceezNightLife').then(data => {
      console.log(data);
      if(data != null)
        this.data = data;
    });
  }

  setPreference(key, value) {
    this.data[key] = value;
    this.savePreferences();
    console.log(value);
  }
  
  getPreference(key) {
    if (this.data.hasOwnProperty(key)) {
      return this.data[key];
    }
    else {
      return false;
    }
  }

  setUserInfo(user) {
    this.setPreference('userid', user);
    this.user.id = null;
  }

  getUserInfo() {
    var userid = this.getPreference('userid');
    return userid;
  }

  setAccessToken(token) {
    this.setPreference('accessToken', token);
  }

  getAccessToken() {
    var token = this.getPreference('accessToken');
    return token;
  }

  getUser(userid) {
    this.server.getResult('Partygoers/' + userid).subscribe((user) => {
      this.user.id = user.id;
      this.user.email = user.email;
      this.user.name = user.name;
      this.user.friends = user.friends;
      if(!this.user.friends)
        this.user.friends = [];
    });
  }
}
