import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import employeeArray from '../resources/employees';
import { ModalController } from 'ionic-angular';
import { UpdateModalPage } from '../update-modal/update-modal';
/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  employeeList = employeeArray;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  deleteEmployee(i){
    this.employeeList.splice(i, 1);
  }

  openModal(){
    let modal = this.modalCtrl.create(UpdateModalPage);
    modal.onDidDismiss((data) => {
      console.log(this.navParams.get('title'));
    });
    modal.present();
  }


}
