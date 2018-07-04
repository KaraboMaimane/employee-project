import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import userArray from '../resources/registration'
import { EmployeesPage } from '../employees/employees';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  userName;
  password;
  usersArray = userArray;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SigninPage');
  }

  enterUserName(event) {
    this.userName = event.target.value;
  }

  enterPassword(event) {
    this.password = event.target.value;
  }

  signIn() {
    /*if condition1 == username && and condition 2 == password
    true{
      next page
    }
    false{
      display alert
    }
    */
   for(let i = 0; i < this.usersArray.length; i++){
      if(this.userName == this.usersArray[i].userName && this.password == this.usersArray[i].password){
        let alert = this.alertCtrl.create({
          title: 'Success!!!',
          subTitle: 'Congratulations you are successfully signed in'
        });
        alert.present();
        this.navCtrl.push(EmployeesPage);
      }else{
        if(this.userName != this.usersArray[i].userName && this.password != this.userName){
          let alert = this.alertCtrl.create({
            title: 'Nah Uh',
            subTitle: 'Wrong data is present here... fix baba'
          });
          alert.present();
        }
        else if(this.userName != this.usersArray[i].userName){
          let alert = this.alertCtrl.create({
            title: 'Nah Uh',
            subTitle: 'Wrong username...'
          });
          alert.present();
        }
        else if(this.password != this.usersArray[i].password){
          let alert = this.alertCtrl.create({
            title: 'Nah Uh',
            subTitle: 'Wrong password..'
          });
          alert.present();
        }

      }
    }
    
  }

}
