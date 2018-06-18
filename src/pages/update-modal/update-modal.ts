import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-modal',
  templateUrl: 'update-modal.html',
})
export class UpdateModalPage {
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('title'));
  }

  closeModal(){
    this.data = {
      title: 'hello',
      message: 'how are you'
    };

    this.viewCtrl.dismiss(this.data);
  }

}
