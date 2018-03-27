import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SharedModule
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SharedModule
  ]
})
export class SharedModule {

  static CLOUD_URL: string = 'https://res.cloudinary.com/ceez/image/upload/';
  static AUDIO_CLOUD_URL: string = 'https://res.cloudinary.com/ceez/video/upload/';
  static UPLOAD_CLOUD_URL: string = 'https://api.cloudinary.com/v1_1/ceez/upload';
  static UPLOAD_CLOUD_PRESET: string = 'gtr0ocwd';
  static Paypal_production_id: string = '';
  static Paypal_sandbox_id: string = 'AfVEZe_GY5XbMEtXLoU7mcuBVLANESVM6wWZfjQKi5vUXuB4RbJGk-zEMBJnKjTmYGQl3gLBefTxrY0P';

}
