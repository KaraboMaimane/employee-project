import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SigninPage } from '../signin/signin';
import { AddEmployeePage } from '../add-employee/add-employee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}
  
  registerUser(){
    this.navCtrl.push(RegisterPage);
  }

  signInPage(){
    this.navCtrl.push(SigninPage);
  }

  addPage(){
    this.navCtrl.push(AddEmployeePage);
  }
}
