import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import employeeArray, {Employee} from '../resources/employees';

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  employeeList = employeeArray;
  alertCtrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController) {
  }

  deleteEmployee(i){
    this.employeeList.splice(i, 1);
  }

  updateEmployee(i){
    employeeArray.splice(i, 1)
  }
  //todo:return data and assing to instance of object to the above

  // presentPrompt() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Login',
  //     inputs: [
  //       {
  //         name: 'name',
  //         placeholder: 'Username'
  //       },
  //       {
  //         name: 'surname',
  //         placeholder: 'Surname'
  //       },
  //       {
  //         name: 'idNo',
  //         placeholder: 'Id No'
  //       },
  //       {
  //         name: 'role',
  //         placeholder: 'Role'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Login',
  //         handler: data => {
  //           // let replaceEmployee = new Employee();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

}
