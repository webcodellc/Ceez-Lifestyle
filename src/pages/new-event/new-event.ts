import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { MenuPage } from '../menu/menu';
import { Geolocation } from '@ionic-native/geolocation';
import * as $ from 'jquery';
import { SharedModule } from '../../shared.module';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage extends BasePage{

  title: string = "New Event";
  userid: string = "";
  model: any = {};
  cloud_url: string = SharedModule.CLOUD_URL;
  audio_cloud_url: string = SharedModule.AUDIO_CLOUD_URL;

  constructor(public injector: Injector, private geolocation: Geolocation) {
    super(injector);

    this.userid = this.userData.getUserInfo();
    
    geolocation = new Geolocation();
    geolocation.getCurrentPosition().then((position) => {
      this.model.location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.model.chunkedAddress = "New House!";
    });
  }

  gotoMenu() {
    this.navCtrl.push(MenuPage);
  }

  cancel() {
    this.navCtrl.pop();
  }

  trigerImage() {
    $("#image_file").click();
  }

  triggerSound() {
    $("#audio_file").click();
  }

  deleteImage() {
    this.model.public_id = "";
  }

  deleteSound() {
    this.model.sound_id = "";
  }

  uploadImage($event) {
    let imagePath = $("#image_file").val();
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
          thisObj.model.public_id = data.public_id;
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          thisObj.showContentView();
          thisObj.showErrorView();
        }
    });

    this.showLoadingView();
  }

  uploadSound($event) {
    let imagePath = $("#audio_file").val();
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
          thisObj.model.sound_id = data.public_id;
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          thisObj.showContentView();
          thisObj.showErrorView();
        }
    });

    this.showLoadingView();
  }

  submit() {
    let accessToken = this.userData.getAccessToken();
    this.server.postResult('Outings', this.model, accessToken).subscribe((event) => {
      this.showToast(this.model.name + " created");
      this.navCtrl.pop();
    });
  }

}
