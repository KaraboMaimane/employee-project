import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import employeeArray, { Employee } from '../resources/employees';
import { AddEmployeePage } from '../add-employee/add-employee';

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  employeeList = employeeArray;
  url;
  alertCtrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrlr: AlertController) {
  }

  deleteEmployee(i) {
    this.employeeList.splice(i, 1);
  }
  //todo:return data and assing to instance of object to the above

  updateEmployee(i) {
    const prompt = this.alertCtrlr.create({
      title: 'Login',
      message: "Enter the details that you want to update",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'surname',
          placeholder: 'Surname'
        },
        {
          name: 'idNo',
          placeholder: 'ID No'
        },
        {
          name: 'role',
          placeholder: 'Role'
        },
        {
          name: 'image',
          type: 'file'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.insertImage(data.image);
            let updateEmp = new Employee(data.name, data.surname, data.idNo, data.role, this.url);
            employeeArray.splice(i, 1, updateEmp);
          }
        }
      ]
    });
    prompt.present();
  }

  addEmployee() {
    this.navCtrl.push(AddEmployeePage);
  }

  insertImage(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files);
  }
}
