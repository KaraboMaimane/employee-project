import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import userArray, { User } from '../resources/registration';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userName;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  enterUserName(event) {
    this.userName = event.target.value;
  }

  enterPassword(event) {
    this.password = event.target.value;
  }

  registerUser() {
    let user = new User(this.userName, this.password);

    if (user.userName != null && user.userName != '' && user.password != null && user.password != '') {
      userArray.push(user);
      let alert = this.alertCtrl.create({
        title: 'Signed In',
        subTitle: 'You have successfully registered',
        buttons: ['OK']
        
      });

      alert.present();
      this.nextPage();
    }
  }

  nextPage() {
    this.navCtrl.push(SigninPage);
  }
}
