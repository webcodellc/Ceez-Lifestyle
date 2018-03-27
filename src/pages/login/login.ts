import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {
  
  isLogin: boolean;

  lmail: string;
  lpass: string;

  name: string;
  email: string;
  password: string;
  confpass: string;

  constructor(public injector: Injector) {
    super(injector);
  }

  ionViewDidLoad() {
    this.isLogin = true;
  }

  createAccountPage() {
    this.isLogin = false;
  }

  loginBackPage() {
    this.isLogin = true;
  }

  login() {
    this.showLoadingView();
    
    var url = 'Partygoers/login?include=user&rememberMe=true';

    this.server.postResult(url, {
      email: this.lmail,
      password: this.lpass
    }).subscribe((data) => {
      var userid = data['userId'];
      var accessToken = data['id'];
      if(userid) {
        this.userData.setAccessToken(accessToken);
        this.userData.setUserInfo(userid);
        this.userData.getUser(userid);

        this.server.getResult('Partygoers/' + userid + '/accessTokens/' + accessToken, accessToken).subscribe((data) => {
          console.log(data);
        });
      }

      this.showContentView();
      this.navigateTo(DashboardPage);
    }, (err) => {
      this.showContentView();
      this.showConfirm("Login Failed", "Email or Password is incorrect");
    })
  }

  signup() {
    if(this.password != this.confpass) {
      this.showConfirm("Signup Failed", "Please verify password!");
      return;
    }

    this.showLoadingView();
    
    var url = 'Partygoers';

    this.server.postResult(url, {
      username: this.name,
      email: this.email,
      password: this.password
    }).subscribe((data) => {
      this.showContentView();
      this.lmail = this.email;
      this.lpass = this.password;
      this.login();
    }, (err) => {
      this.showContentView();
      this.showConfirm("Signup Failed", "Email or Password is incorrect");
    })
  }

  loginWithFB() {
    
  }

}
