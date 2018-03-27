webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsNearYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventsNearYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsNearYouPage = (function (_super) {
    __extends(EventsNearYouPage, _super);
    function EventsNearYouPage(injector, geolocation) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.geolocation = geolocation;
        _this.title = "Events Near You";
        _this.events = [];
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].CLOUD_URL;
        geolocation = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]();
        geolocation.getCurrentPosition().then(function (position) {
            var location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            _this.showLoadingView();
            _this.server.getResult("Outings/nearby?here=" + JSON.stringify(location) + "&max=10000").subscribe(function (data) {
                if (data.length > 0) {
                    data.forEach(function (event) {
                        _this.events.push({
                            id: event.id,
                            src: event.public_id,
                            title: event.name,
                            date: event.date,
                            venue: event.venue,
                            address: event.address
                        });
                    });
                }
                _this.showContentView();
            });
        });
        return _this;
    }
    EventsNearYouPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    EventsNearYouPage.prototype.gotoEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__["a" /* EventDetailPage */], id);
    };
    EventsNearYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events-near-you',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/events-near-you/events-near-you.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      {{title}}\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-list-header class="filter-bar">\n      <button ion-button icon-only item-start clear class="filter-btn">\n        Filter\n      </button>\n      <button ion-button icon-only item-end clear class="filter-btn">\n        - Clear Filters\n      </button>\n    </ion-list-header>\n    <div class="event-list">\n      <ion-item *ngFor="let event of events; let i = index" (click)="gotoEvent(event.id)">\n        <img class="event-avatar" src="{{cloud_url}}h_160,w_200/{{event.src}}" item-start>\n        <h3>{{event.date | date: \'dd, MMMM yyyy\'}}</h3>\n        <h3>{{event.title}}</h3>\n        <h3>{{event.venue}}</h3>\n        <h3>{{event.address}}</h3>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/events-near-you/events-near-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], EventsNearYouPage);
    return EventsNearYouPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=events-near-you.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.title = "Dashboard";
        return _this;
    }
    DashboardPage.prototype.createNewEvent = function () {
        this.navigateTo(__WEBPACK_IMPORTED_MODULE_2__new_event_new_event__["a" /* NewEventPage */]);
    };
    DashboardPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/dashboard/dashboard.html"*/'<ion-content padding>\n\n    <div class="my-header">\n      <div class="my-header-paragraph">\n        <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n        <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n      </div>\n      <div class="my-header-title">\n        {{title}}\n      </div>\n    </div>\n\n    <button ion-button icon-start full round large color="white" class="small-height pink-color" (click)="createNewEvent()">\n      <ion-icon name="add"></ion-icon>\n      Create a new event\n    </button>\n\n    <div class="my-card">\n      <div class="my-card-title">\n        You are not hosting any upcoming events.\n      </div>\n      <div class="my-card-content">\n        <a id="create-new-event-link" (click)="createNewEvent()">Create a new event!</a>\n      </div>\n    </div>\n\n    <div class="my-card">\n      <div class="my-card-title">\n        Your next event:\n        Friday, March 26,2018\n      </div>\n      <div class="my-card-content">\n        Share and go with your friends\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], DashboardPage);
    return DashboardPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewEventPage = (function (_super) {
    __extends(NewEventPage, _super);
    function NewEventPage(injector, geolocation) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.geolocation = geolocation;
        _this.title = "New Event";
        _this.userid = "";
        _this.model = {};
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].CLOUD_URL;
        _this.audio_cloud_url = __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].AUDIO_CLOUD_URL;
        _this.userid = _this.userData.getUserInfo();
        geolocation = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]();
        geolocation.getCurrentPosition().then(function (position) {
            _this.model.location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            _this.model.chunkedAddress = "New House!";
        });
        return _this;
    }
    NewEventPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    NewEventPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    NewEventPage.prototype.trigerImage = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#image_file").click();
    };
    NewEventPage.prototype.triggerSound = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#audio_file").click();
    };
    NewEventPage.prototype.deleteImage = function () {
        this.model.public_id = "";
    };
    NewEventPage.prototype.deleteSound = function () {
        this.model.sound_id = "";
    };
    NewEventPage.prototype.uploadImage = function ($event) {
        var imagePath = __WEBPACK_IMPORTED_MODULE_4_jquery__("#image_file").val();
        var accessToken = this.userData.getAccessToken();
        var files = $event.target.files;
        // Create a formdata object and add the files
        var data = new FormData();
        data.append("upload_preset", __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_PRESET);
        data.append("tags", this.userid);
        data.append("file", files[0]);
        var thisObj = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            url: __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_URL,
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                thisObj.showContentView();
                thisObj.model.public_id = data.public_id;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                thisObj.showContentView();
                thisObj.showErrorView();
            }
        });
        this.showLoadingView();
    };
    NewEventPage.prototype.uploadSound = function ($event) {
        var imagePath = __WEBPACK_IMPORTED_MODULE_4_jquery__("#audio_file").val();
        var accessToken = this.userData.getAccessToken();
        var files = $event.target.files;
        // Create a formdata object and add the files
        var data = new FormData();
        data.append("upload_preset", __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_PRESET);
        data.append("tags", this.userid);
        data.append("file", files[0]);
        var thisObj = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            url: __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_URL,
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                thisObj.showContentView();
                thisObj.model.sound_id = data.public_id;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                thisObj.showContentView();
                thisObj.showErrorView();
            }
        });
        this.showLoadingView();
    };
    NewEventPage.prototype.submit = function () {
        var _this = this;
        var accessToken = this.userData.getAccessToken();
        this.server.postResult('Outings', this.model, accessToken).subscribe(function (event) {
            _this.showToast(_this.model.name + " created");
            _this.navCtrl.pop();
        });
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/new-event/new-event.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      <ion-icon class="back" name="ios-arrow-back" (click)="cancel()"></ion-icon>\n      <label>{{title}}</label>\n    </div>\n  </div>\n\n  <form (ngSubmit)="submit()" #eventForm="ngForm">\n\n  <div class="event-info">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Event:\n        </ion-col>\n        <ion-col col-8>\n          <ion-input placeholder="Type Name" name="name" [(ngModel)]="model.name" required></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Date:\n        </ion-col>\n        <ion-col col-8>\n          <ion-datetime displayFormat="MMM DD, YYYY" name="date" placeholder="Select Date" [(ngModel)]="model.date" required></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Genre:\n        </ion-col>\n        <ion-col col-8>\n          <ion-select name="genre" [(ngModel)]="model.genre" required>\n            <ion-option value="Open-Format">Open-Format</ion-option>\n            <ion-option value="EDM">EDM</ion-option>\n            <ion-option value="Hip-Hop">Hip-Hop</ion-option>\n            <ion-option value="Rap">Rap</ion-option>\n            <ion-option value="Latin">Latin</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Dress code:\n        </ion-col>\n        <ion-col col-8>\n          <ion-input type="number" placeholder="Optional" name="dressCode" [(ngModel)]="model.dressCode"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Venue:\n        </ion-col>\n        <ion-col col-8>\n          <ion-input placeholder="" name="venue" [(ngModel)]="model.venue" required></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Address:\n        </ion-col>\n        <ion-col col-8>\n          <ion-input placeholder="i.e. 123 Drive Miami, FL" name="address" [(ngModel)]="model.address" required></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Type of Venue:\n        </ion-col>\n        <ion-col col-8>\n          <ion-select name="venue_type" [(ngModel)]="model.venue_type" required>\n            <ion-option value="Club">Club</ion-option>\n            <ion-option value="Bar">Bar</ion-option>\n            <ion-option value="Lounge">Lounge</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Cover:\n        </ion-col>\n        <ion-col col-8>\n          <ion-toggle name="cover" [(ngModel)]="cover"></ion-toggle>\n          <ion-input *ngIf="cover" type="number" placeholder="$" name="price" [(ngModel)]="model.price" required></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Details:\n        </ion-col>\n        <ion-col col-8>\n          <ion-textarea placeholder="Optional" name="details" [(ngModel)]="model.details"></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Image:\n        </ion-col>\n        <ion-col col-8>\n          <input type="file" accept="image/*" style="display: none;" id="image_file" (change)="uploadImage($event)"/>\n          <button type="button" color="white" class="small-height" (click)="trigerImage()">\n            <ion-icon name="md-images"></ion-icon>\n          </button>\n          <button *ngIf="model.public_id" type="button" color="white" class="small-height" (click)="deleteImage()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-card *ngIf="model.public_id">\n        <img src="{{cloud_url}}{{model.public_id}}"/>\n      </ion-card>\n      <ion-row>\n        <ion-col>\n          Music:\n        </ion-col>\n        <ion-col col-8>\n          <input type="file" accept="audio/*" style="display: none;" id="audio_file" (change)="uploadSound($event)"/>\n          <button type="button" color="white" class="small-height" (click)="triggerSound()">\n            <ion-icon name="ios-musical-notes"></ion-icon>\n          </button>\n          <button *ngIf="model.sound_id" type="button" color="white" class="small-height" (click)="deleteSound()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-card *ngIf="model.sound_id">\n        <audio src="{{audio_cloud_url}}{{model.sound_id}}" controls></audio>\n      </ion-card>\n    </ion-grid>\n\n  </div>\n\n  <button ion-button icon-start full round large color="white" class="margin pink-color small-height" [disabled]="!eventForm.form.valid" type="submit">\n    <ion-icon name="add"></ion-icon>\n    Create Event\n  </button>\n\n  </form>\n\n  <div class="input-label-group">\n    <a id="event-cancel-link" (click)="cancel()">Cancel</a>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], NewEventPage);
    return NewEventPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(116);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.isLogin = true;
    };
    LoginPage.prototype.createAccountPage = function () {
        this.isLogin = false;
    };
    LoginPage.prototype.loginBackPage = function () {
        this.isLogin = true;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoadingView();
        var url = 'Partygoers/login?include=user&rememberMe=true';
        this.server.postResult(url, {
            email: this.lmail,
            password: this.lpass
        }).subscribe(function (data) {
            var userid = data['userId'];
            var accessToken = data['id'];
            if (userid) {
                _this.userData.setAccessToken(accessToken);
                _this.userData.setUserInfo(userid);
                _this.userData.getUser(userid);
                _this.server.getResult('Partygoers/' + userid + '/accessTokens/' + accessToken, accessToken).subscribe(function (data) {
                    console.log(data);
                });
            }
            _this.showContentView();
            _this.navigateTo(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        }, function (err) {
            _this.showContentView();
            _this.showConfirm("Login Failed", "Email or Password is incorrect");
        });
    };
    LoginPage.prototype.signup = function () {
        var _this = this;
        if (this.password != this.confpass) {
            this.showConfirm("Signup Failed", "Please verify password!");
            return;
        }
        this.showLoadingView();
        var url = 'Partygoers';
        this.server.postResult(url, {
            username: this.name,
            email: this.email,
            password: this.password
        }).subscribe(function (data) {
            _this.showContentView();
            _this.lmail = _this.email;
            _this.lpass = _this.password;
            _this.login();
        }, function (err) {
            _this.showContentView();
            _this.showConfirm("Signup Failed", "Email or Password is incorrect");
        });
    };
    LoginPage.prototype.loginWithFB = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/login/login.html"*/'<ion-content>\n     \n  <img class="login-title" src="./assets/imgs/login-back.png" width="100%" height="240px"/>\n\n  <div class="login-circle" *ngIf="isLogin">\n    Log In\n  </div>\n\n  <div class="login-circle" *ngIf="!isLogin">\n    Sign Up\n  </div>\n\n  <div class="" padding>\n    <form (ngSubmit)="login()" #loginForm="ngForm" *ngIf="isLogin">\n      <!-- input labels -->\n      <div class="input-label-group">\n        <ion-input class="login-input" type="email" placeholder="Email" name="lmail" [(ngModel)]="lmail" required></ion-input>\n        <ion-input class="login-input" type="password" placeholder="Password" name="lpass" [(ngModel)]="lpass" required></ion-input>\n        <button ion-button full round large [disabled]="!loginForm.form.valid">Log In</button>\n      </div>\n    </form>\n\n    <form (ngSubmit)="signup()" #signupForm="ngForm" *ngIf="!isLogin">\n      <!-- input labels -->\n      <div class="input-label-group">\n        <ion-input class="login-input" type="name" placeholder="Name" name="name" [(ngModel)]="name" required></ion-input>\n        <ion-input class="login-input" type="email" placeholder="Email" name="email" [(ngModel)]="email" required></ion-input>\n        <ion-input class="login-input" type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n        <ion-input class="login-input" type="password" placeholder="Confirm Password" name="confpass" [(ngModel)]="confpass" required></ion-input>\n        <button ion-button full round large [disabled]="!signupForm.form.valid">Sign Up</button>\n      </div>\n    </form>\n  \n    <!-- form buttons -->\n    <div class="input-label-group">\n      <div id="or"> - OR - </div>\n      <button ion-button icon-end full round large color="facebook" (click)="loginWithFB()">\n        Connect with facebook\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <a id="create-account-button" (click)="createAccountPage()" *ngIf="isLogin">Create an Account</a>\n      <a id="login-back" (click)="loginBackPage()" *ngIf="!isLogin">Back</a>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_audio__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(119);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventDetailPage = (function (_super) {
    __extends(EventDetailPage, _super);
    function EventDetailPage(injector, payPal, audioProvider) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.payPal = payPal;
        _this.audioProvider = audioProvider;
        _this.progress = 0;
        _this.play = false;
        _this.csecond = "00";
        _this.cminitue = "00";
        _this.tsecond = "00";
        _this.tminitue = "00";
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].CLOUD_URL;
        _this.audio_cloud_url = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].AUDIO_CLOUD_URL;
        _this.id = _this.navParams.data;
        _this.server.getResult("Outings/" + _this.id).subscribe(function (data) {
            _this.title = data.name;
            _this.src = data.public_id;
            _this.date = data.date;
            _this.venue = data.venue;
            _this.address = data.address;
            _this.genre = data.genre;
            _this.venue_type = data.venue_type;
            _this.sound_src = data.sound_id;
            _this.price = data.price;
            _this.location = {
                lat: data.location.lat,
                lng: data.location.lng,
            };
            _this.initMap();
        });
        _this.payPal = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */]);
        return _this;
    }
    EventDetailPage.prototype.StartTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (!_this.play)
                return;
            var duration = __WEBPACK_IMPORTED_MODULE_6_jquery__('#audio')[0].duration;
            var curTime = __WEBPACK_IMPORTED_MODULE_6_jquery__('#audio')[0].currentTime;
            _this.progress = Math.round(curTime / duration * 100);
            _this.csecond = _this.getDuraton(curTime % 60);
            _this.cminitue = _this.getDuraton(curTime / 60);
            if (_this.progress == 100) {
                _this.play = false;
                _this.progress = 0;
            }
            _this.StartTimer();
        }, 1000);
    };
    EventDetailPage.prototype.initMap = function () {
        var position = new google.maps.LatLng(this.location.lat, this.location.lng);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            disableDefaultUI: true,
            center: position
        });
        new google.maps.Marker({ position: position, title: 'Opens at: 7:am' }).setMap(this.map);
    };
    EventDetailPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    EventDetailPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    EventDetailPage.prototype.Purchase = function () {
        var _this = this;
        if (!this.userData.getUserInfo()) {
            this.navCtrl.pop();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            return;
        }
        this.payPal.init({
            PayPalEnvironmentProduction: __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].Paypal_production_id,
            PayPalEnvironmentSandbox: __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].Paypal_sandbox_id
        }).then(function () {
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](_this.price.toString(), 'USD', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (data) {
                    var response = data.response;
                    var accessToken = _this.userData.getAccessToken();
                    _this.server.postResult('RSVPs', {
                        pay_id: response.id,
                        ownerId: _this.userData.getUserInfo(),
                        outingId: _this.id,
                        create_time: response.create_time,
                        state: response.state
                    }, accessToken).subscribe(function (resp) {
                        _this.showToast('You registered!');
                        _this.navCtrl.pop();
                    });
                }, function (err) {
                });
            }, function (err) {
            });
        }, function (err) {
        });
    };
    EventDetailPage.prototype.togglePlay = function () {
        this.play = !this.play;
        var duration = __WEBPACK_IMPORTED_MODULE_6_jquery__('#audio')[0].duration;
        if (this.play) {
            this.StartTimer();
            this.tsecond = this.getDuraton(duration % 60);
            this.tminitue = this.getDuraton(duration / 60);
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#audio')[0].play();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#audio')[0].pause();
        }
    };
    EventDetailPage.prototype.getDuraton = function (duration) {
        var second = Math.round(duration);
        var ssecond = second.toString();
        if (second < 10)
            ssecond = "0" + ssecond;
        return ssecond;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EventDetailPage.prototype, "mapElement", void 0);
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event-detail',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/event-detail/event-detail.html"*/'<ion-content padding>\n\n    <div class="my-header nobottom">\n      <div class="my-header-paragraph">\n        <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n        <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n      </div>\n      <div class="my-header-title">\n        <ion-icon class="back" name="ios-arrow-back" (click)="cancel()"></ion-icon>\n        <label>{{title}}</label>\n      </div>\n    </div>\n\n    <div class="event-info">\n      <img src="{{cloud_url}}{{src}}"/>\n\n      <ion-grid>\n\n        <div id="music-player" *ngIf="sound_src">\n          <audio src="{{audio_cloud_url}}{{sound_src}}" id="audio" style="display: none"></audio>\n          <button ion-button icon-only clear color="white" (click)="togglePlay()"><ion-icon name="{{play ? \'pause\' : \'play\'}}"></ion-icon></button>\n          <div class="progress-outer">\n              <div class="progress-inner" [style.width]="progress + \'%\'">\n              </div>\n          </div>\n          <div class="duration">{{cminitue}}:{{csecond}}</div>&nbsp;/&nbsp;<div class="duration">{{tminitue}}:{{tsecond}}</div>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            Event:\n          </ion-col>\n          <ion-col col-8>\n            {{title}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Date:\n          </ion-col>\n          <ion-col col-8>\n            {{date | date: \'dd, MMMM yyyy\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Venue:\n          </ion-col>\n          <ion-col col-8>\n            {{venue}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Address:\n          </ion-col>\n          <ion-col col-8>\n            {{address}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <button round outline small ion-button *ngIf="genre" color="white" class="normal-text">{{genre}}</button>\n          </ion-col>\n          <ion-col>\n            <button round outline small ion-button *ngIf="venue_type" color="white" class="normal-text">{{venue_type}}</button>\n          </ion-col>\n          <ion-col>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n    <button *ngIf="price" ion-button icon-start full round large color="white" class="small-height pink-color margin normal-text" (click)="Purchase()">\n      <ion-icon name="ios-card"></ion-icon>\n        {{price}}$ Purchase\n    </button>\n\n    <div #map id="map"></div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/event-detail/event-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_5_ionic_audio__["a" /* AudioProvider */]])
    ], EventDetailPage);
    return EventDetailPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=event-detail.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_friend_new_friend__ = __webpack_require__(230);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(injector, userData) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.userData = userData;
        _this.title = "Your Profile";
        _this.avatar = "";
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].CLOUD_URL;
        _this.edit = false;
        _this.friends = [];
        console.log(_this.navParams);
        _this.userid = _this.navParams.get("userid");
        _this.me = _this.navParams.get("me");
        _this.server.getResult('Partygoers/' + _this.userid).subscribe(function (data) {
            _this.src = data.profileImage;
            _this.name = data.username;
            _this.id = data.id;
            _this.age = data.age;
            _this.location = data.location;
            _this.attended = "32";
            if (!_this.me)
                _this.title = _this.name;
            if (!data.friends)
                return;
            _this.server.getResult('Partygoers').subscribe(function (resp) {
                resp.forEach(function (user) {
                    var isFriend = false;
                    data.friends.forEach(function (friend) {
                        if (friend == user.id) {
                            isFriend = true;
                        }
                    });
                    if (isFriend)
                        _this.friends.push(user);
                });
            });
        });
        return _this;
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ProfilePage.prototype.addFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__new_friend_new_friend__["a" /* NewFriendPage */]);
    };
    ProfilePage.prototype.addFriend = function () {
        var _this = this;
        var accessToken = this.userData.getAccessToken();
        this.userData.user.friends.push(this.userid);
        this.server.putResult('Partygoers/' + this.userData.user.id, {
            friends: this.userData.user.friends,
        }, accessToken).subscribe(function (resp) {
            _this.showToast(_this.name + " is your friend now!");
            _this.navCtrl.pop();
        });
    };
    ProfilePage.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    ProfilePage.prototype.updateEdit = function () {
        var _this = this;
        this.showLoadingView();
        var accessToken = this.userData.getAccessToken();
        this.server.putResult('Partygoers/' + this.userid, {
            usrename: this.name,
            age: this.age,
            location: this.location,
        }, accessToken).subscribe(function (resp) {
            _this.showContentView();
            _this.edit = false;
        });
    };
    ProfilePage.prototype.triggerAvatar = function () {
        if (this.edit) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#file_avatar").click();
        }
    };
    ProfilePage.prototype.uploadAvatar = function ($event) {
        var imagePath = __WEBPACK_IMPORTED_MODULE_5_jquery__("#file_avatar").val();
        var accessToken = this.userData.getAccessToken();
        var files = $event.target.files;
        // Create a formdata object and add the files
        var data = new FormData();
        data.append("upload_preset", __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_PRESET);
        data.append("tags", this.userid);
        data.append("file", files[0]);
        var thisObj = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"]({
            url: __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].UPLOAD_CLOUD_URL,
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                thisObj.showContentView();
                thisObj.server.putResult('Partygoers/' + thisObj.userid, {
                    profileImage: data.public_id
                }, accessToken).subscribe(function (resp) {
                    thisObj.src = resp.profileImage;
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                thisObj.showContentView();
                thisObj.showErrorView();
            }
        });
        this.showLoadingView();
    };
    ProfilePage.prototype.viewProfile = function (user) {
        this.navCtrl.push(ProfilePage_1, {
            title: user.username,
            userid: user.id,
            me: false
        });
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/profile/profile.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      <ion-icon class="back" name="ios-arrow-back" (click)="cancel()"></ion-icon>\n      {{title}}\n      <ion-icon *ngIf="!edit && me" name="create" (click)="toggleEdit()"></ion-icon>\n      <ion-icon *ngIf="edit" name="md-checkmark" (click)="updateEdit()"></ion-icon>\n      <ion-icon *ngIf="edit" name="md-close" (click)="toggleEdit()"></ion-icon>\n    </div>\n    <ion-row margin-top padding-bottom>\n      <ion-col col-4>\n        <img class="avatar" src="{{cloud_url}}{{src}}" (click)="triggerAvatar()"/>\n        <input type="file" accept="image/*" style="display: none;" id="file_avatar" (change)="uploadAvatar($event)"/>\n      </ion-col>\n      <ion-col col-8 class="white-text">\n        <ion-row>\n          Name: &nbsp;\n          <div *ngIf="!edit">{{name}}</div>\n          <ion-input *ngIf="edit" placeholder="Type Name" [(ngModel)]="name" required></ion-input>\n        </ion-row>\n        <ion-row>\n          Age: &nbsp;\n          <div *ngIf="!edit">{{age}}</div>\n          <ion-input type="number" *ngIf="edit" placeholder="24" [(ngModel)]="age" required></ion-input>\n        </ion-row>\n        <ion-row>\n          Location: &nbsp;\n          <div *ngIf="!edit">{{location}}</div>\n          <ion-textarea *ngIf="edit" placeholder="i.e: Miami" [(ngModel)]="location" required></ion-textarea>\n        </ion-row>\n        <ion-row>\n          Attended: &nbsp; {{attended}} Events\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class="my-header-title border-top">\n      Friends\n      <ion-icon *ngIf="me" name="add" (click)="addFriends()"></ion-icon>\n    </div>\n\n    <ion-row *ngIf="friends.length > 0">\n      <div class="margin-auto" style="display: inline-flex;">\n        <img *ngFor="let friend of friends" class="friend" src="{{cloud_url}}{{friend.profileImage}}" (click)="viewProfile(friend)"/>\n      </div>\n    </ion-row>\n\n    <div *ngIf="me && (friends.length == 0)" class="input-label-group" text-center>\n      <a class="border-bottom" style="color:white" (click)="addFriends()">Add Friends</a>\n    </div>\n\n    <ion-row margin-top padding-bottom *ngIf="me">\n      <ion-col class="qr-code">\n        <h4>Scan QR code and share friends!</h4>\n      </ion-col>\n      <ion-col>\n        <ngx-qrcode [qrc-value]="id"></ngx-qrcode>       \n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="!me" padding class="input-label-group" text-center>\n      <a class="border-bottom" style="color:white" (click)="addFriend()">Add Friends List</a>\n    </div>\n\n    <div class="my-header-title border-top">\n      Upcoming events\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__["a" /* UserData */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(59);



var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]);
        this.server = injector.get(__WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* ServerProvider */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]);
        this.userData = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserData */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* MenuController */]);
        menu.swipeEnable(true);
    }
    BasePage.prototype.showLoadingView = function (loadingText) {
        if (loadingText === void 0) { loadingText = 'Loading...'; }
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isContentViewVisible = false;
        this.isLoadingViewVisible = true;
        this.loader = this.loadingCtrl.create({
            content: "<p class=\"item\">" + loadingText + "</p>",
        });
        this.loader.present();
    };
    BasePage.prototype.showContentView = function () {
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.showEmptyView = function () {
        this.isErrorViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.showErrorView = function () {
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isErrorViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.onRefreshComplete = function (data) {
        if (data === void 0) { data = null; }
        if (this.refresher) {
            this.refresher.complete();
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (data && data.length === 0) {
                this.infiniteScroll.enable(false);
            }
            else {
                this.infiniteScroll.enable(true);
            }
        }
    };
    BasePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BasePage.prototype.showConfirm = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: ['Dismiss']
            });
            confirm.present();
        });
    };
    BasePage.prototype.navigateTo = function (page, params) {
        if (params === void 0) { params = {}; }
        this.navCtrl.push(page, params);
    };
    BasePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return BasePage;
}());

//# sourceMappingURL=base-page.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_event_new_event__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_near_you_events_near_you__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_tickets_my_tickets__ = __webpack_require__(231);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function (_super) {
    __extends(MenuPage, _super);
    function MenuPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.user = _this.userData.user;
        return _this;
    }
    MenuPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    MenuPage.prototype.gotoDashboard = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MenuPage.prototype.gotoProfile = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */], {
            userid: this.user.id,
            me: true
        });
    };
    MenuPage.prototype.gotoEvents = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__events_events__["a" /* EventsPage */]);
    };
    MenuPage.prototype.gotoNewEvent = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_event_new_event__["a" /* NewEventPage */]);
    };
    MenuPage.prototype.gotoNearEvents = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__events_near_you_events_near_you__["a" /* EventsNearYouPage */]);
    };
    MenuPage.prototype.gotoMyTickets = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_tickets_my_tickets__["a" /* MyTicketsPage */]);
    };
    MenuPage.prototype.login = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.logout = function () {
        this.navCtrl.pop();
        this.userData.setUserInfo(null);
        this.gotoNearEvents();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/menu/menu.html"*/'<ion-content padding>\n\n  <div class="my-header">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="close" (click)="close()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n\n      <div class="menu-item" (click)="gotoNearEvents()">Home</div>\n\n      <div class="menu-item" (click)="gotoDashboard()">Dashboard</div>\n      <div *ngIf="user.id" class="menu-item" (click)="gotoProfile()">Profile</div>\n      <div class="menu-item" (click)="gotoEvents()">Events</div>\n      <div *ngIf="user.id" class="menu-item" (click)="gotoNewEvent()">New Event</div>\n      <div *ngIf="user.id" class="menu-item" (click)="gotoMyTickets()">My Tickets</div>\n\n      <div *ngIf="user.id">\n          <div class="menu-item" (click)="logout()">Log out</div>\n      </div>\n\n      <div *ngIf="!user.id">\n        <div class="menu-item" (click)="login()">Log in</div>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], MenuPage);
    return MenuPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = (function (_super) {
    __extends(EventsPage, _super);
    function EventsPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.title = "Events";
        _this.events = [];
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */].CLOUD_URL;
        return _this;
    }
    EventsPage.prototype.ionViewDidEnter = function () {
        this.loadOutings();
    };
    EventsPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    EventsPage.prototype.gotoEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__["a" /* EventDetailPage */], id);
    };
    EventsPage.prototype.loadOutings = function () {
        var _this = this;
        this.showLoadingView();
        this.server.getResult("Outings?").subscribe(function (data) {
            if (data.length > 0) {
                _this.events = data;
                _this.showContentView();
            }
        });
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/events/events.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      {{title}}\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-list-header class="filter-bar">\n      <button ion-button icon-only item-start clear class="filter-btn">\n        Filter\n      </button>\n      <button ion-button icon-only item-end clear class="filter-btn">\n        - Clear Filters\n      </button>\n    </ion-list-header>\n    <div class="event-list">\n      <ion-item *ngFor="let event of events; let i = index" (click)="gotoEvent(event.id)">\n        <img class="event-avatar" src="{{cloud_url}}h_160,w_200/{{event.public_id}}" item-start>\n        <h3>{{event.date | date: \'dd, MMMM yyyy\'}}</h3>\n        <h3>{{event.title}}</h3>\n        <h3>{{event.venue}}</h3>\n        <h3>{{event.address}}</h3>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], EventsPage);
    return EventsPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(121);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewFriendPage = (function (_super) {
    __extends(NewFriendPage, _super);
    function NewFriendPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.title = "New Friend";
        _this.users = [];
        _this.userid = "";
        _this.friends = [];
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].CLOUD_URL;
        _this.userid = _this.navParams.get("userid");
        _this.friends = _this.navParams.get("friends");
        _this.server.getResult('Partygoers').subscribe(function (data) {
            _this.users = data;
        });
        return _this;
    }
    NewFriendPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    NewFriendPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    NewFriendPage.prototype.addFriend = function () {
    };
    NewFriendPage.prototype.viewProfile = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {
            title: user.username,
            userid: user.id,
            me: false
        });
    };
    NewFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-friend',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/new-friend/new-friend.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      <ion-icon class="back" name="ios-arrow-back" (click)="cancel()"></ion-icon>\n      <label>{{title}}</label>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row *ngFor="let user of users">\n      <ion-col col-3>\n        <img class="avatar" src="{{cloud_url}}{{user.profileImage}}" (click)="viewProfile(user)"/>\n      </ion-col>\n      <ion-col col-7>\n        <h4>{{user.username}}</h4>\n        <h5>{{user.age}}</h5>\n        <h5>{{user.location}}</h5>\n      </ion-col>\n      <ion-col col-2 class="action">\n        <ion-icon name="md-checkmark-circle-outline" (click)="addFriend()"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/new-friend/new-friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], NewFriendPage);
    return NewFriendPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=new-friend.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTicketsPage = (function (_super) {
    __extends(MyTicketsPage, _super);
    function MyTicketsPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.title = "My Tickets";
        _this.events = [];
        _this.cloud_url = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].CLOUD_URL;
        return _this;
    }
    MyTicketsPage.prototype.ionViewDidEnter = function () {
    };
    MyTicketsPage.prototype.gotoMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    MyTicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-tickets',template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/my-tickets/my-tickets.html"*/'<ion-content padding>\n\n  <div class="my-header nobottom">\n    <div class="my-header-paragraph">\n      <ion-icon class="menu" name="menu" (click)="gotoMenu()"></ion-icon>\n      <img class="logo" src="./assets/imgs/logo.png" height="60px"/>\n    </div>\n    <div class="my-header-title">\n      {{title}}\n    </div>\n  </div>\n\n  <ion-list>\n    <div class="event-list">\n      <ion-item *ngFor="let event of events; let i = index" (click)="gotoEvent(event.id)">\n        <img class="event-avatar" src="{{cloud_url}}h_160,w_200/{{event.src}}" item-start>\n        <h3>{{event.date | date: \'dd, MMMM yyyy\'}}</h3>\n        <h3>{{event.title}}</h3>\n        <h3>{{event.venue}}</h3>\n        <h3>{{event.address}}</h3>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/pages/my-tickets/my-tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], MyTicketsPage);
    return MyTicketsPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=my-tickets.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_audio__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_server_server__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_userdata_userdata__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_event_new_event__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_events_near_you_events_near_you__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_event_detail_event_detail__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_events_events__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_new_friend_new_friend__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_my_tickets_my_tickets__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["b" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["d" /* WebAudioProvider */]();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_events_near_you_events_near_you__["a" /* EventsNearYouPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_detail_event_detail__["a" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_new_friend_new_friend__["a" /* NewFriendPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["c" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10_ionic_audio__["e" /* defaultAudioProviderFactory */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_events_near_you_events_near_you__["a" /* EventsNearYouPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_detail_event_detail__["a" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_new_friend_new_friend__["a" /* NewFriendPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_server_server__["a" /* ServerProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_userdata_userdata__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__["a" /* PayPal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.CLOUD_URL = 'https://res.cloudinary.com/ceez/image/upload/';
    SharedModule.AUDIO_CLOUD_URL = 'https://res.cloudinary.com/ceez/video/upload/';
    SharedModule.UPLOAD_CLOUD_URL = 'https://api.cloudinary.com/v1_1/ceez/upload';
    SharedModule.UPLOAD_CLOUD_PRESET = 'gtr0ocwd';
    SharedModule.Paypal_production_id = '';
    SharedModule.Paypal_sandbox_id = 'AfVEZe_GY5XbMEtXLoU7mcuBVLANESVM6wWZfjQKi5vUXuB4RbJGk-zEMBJnKjTmYGQl3gLBefTxrY0P';
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                SharedModule_1
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
            ],
            exports: [
                SharedModule_1
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userdata_userdata__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_near_you_events_near_you__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, userData, server) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_events_near_you_events_near_you__["a" /* EventsNearYouPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            userData.loadPreferences().then(function () {
                var userid = userData.getUserInfo();
                if (userid) {
                    userData.getUser(userid);
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonathan/iCloud Drive (Archive)/Documents/Business/Clients/Ceez Lifestyle/new app/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userdata_userdata__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RemoteService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServerProvider = (function () {
    function ServerProvider(http) {
        this.http = http;
        this.baseUrl = "http://googleseopro.com:3001/api/";
        this.assetsUrl = "assets/data/";
    }
    ServerProvider.prototype.getResult = function (apiUrl, accessToken) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (accessToken)
            header.append('authorization', accessToken);
        return this.http.get(this.baseUrl + apiUrl, {
            headers: header
        })
            .map(function (res) { return res.json(); });
    };
    ServerProvider.prototype.postResult = function (apiUrl, content, accessToken) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (accessToken)
            header.append('authorization', accessToken);
        return this.http.post(this.baseUrl + apiUrl, content, {
            headers: header
        })
            .map(function (res) { return res.json(); });
    };
    ServerProvider.prototype.putResult = function (apiUrl, content, accessToken) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (accessToken)
            header.append('authorization', accessToken);
        return this.http.put(this.baseUrl + apiUrl, content, {
            headers: header
        })
            .map(function (res) { return res.json(); });
    };
    ServerProvider.prototype.getResource = function (resource) {
        return this.http.get(this.assetsUrl + resource)
            .map(function (res) { return res.json(); });
    };
    ServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServerProvider);
    return ServerProvider;
}());

//# sourceMappingURL=server.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(storage, server) {
        this.storage = storage;
        this.server = server;
        this.data = {};
        this.user = {
            id: "",
            name: "",
            email: "",
            friends: [],
            isAdmin: false,
            isPromoter: false,
            isPhotographer: false,
        };
    }
    UserData.prototype.savePreferences = function () {
        this.storage.set('ceezNightLife', this.data);
    };
    UserData.prototype.loadPreferences = function () {
        var _this = this;
        return this.storage.get('ceezNightLife').then(function (data) {
            console.log(data);
            if (data != null)
                _this.data = data;
        });
    };
    UserData.prototype.setPreference = function (key, value) {
        this.data[key] = value;
        this.savePreferences();
        console.log(value);
    };
    UserData.prototype.getPreference = function (key) {
        if (this.data.hasOwnProperty(key)) {
            return this.data[key];
        }
        else {
            return false;
        }
    };
    UserData.prototype.setUserInfo = function (user) {
        this.setPreference('userid', user);
        this.user.id = null;
    };
    UserData.prototype.getUserInfo = function () {
        var userid = this.getPreference('userid');
        return userid;
    };
    UserData.prototype.setAccessToken = function (token) {
        this.setPreference('accessToken', token);
    };
    UserData.prototype.getAccessToken = function () {
        var token = this.getPreference('accessToken');
        return token;
    };
    UserData.prototype.getUser = function (userid) {
        var _this = this;
        this.server.getResult('Partygoers/' + userid).subscribe(function (user) {
            _this.user.id = user.id;
            _this.user.email = user.email;
            _this.user.name = user.name;
            _this.user.friends = user.friends;
            if (!_this.user.friends)
                _this.user.friends = [];
        });
    };
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=userdata.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map