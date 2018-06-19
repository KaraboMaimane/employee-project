import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import { Employee } from '../resources/employees';
import employeeArray from '../resources/employees';


@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
  firstName;
  lastName;
  idNo;
  role;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  assignName(event){
    this.firstName = event.target.value;
  }

  assignLastName(event){
    this.lastName = event.target.value;
  }

  assignId(event){
    this.idNo = event.target.value;
  }

  assignRole(event){
    this.role = event.target.value;
  }
  
  nextPage(){
    this.navCtrl.push(EmployeesPage);
  }

  addEmployee(){
    let employeeIns = new Employee(this.firstName, this.lastName, this.idNo, this.role);
    employeeArray.push(employeeIns);
    console.log(employeeArray);
  }
}
