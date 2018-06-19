import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EmployeesPage } from '../pages/employees/employees';
import { AddEmployeePage } from '../pages/add-employee/add-employee';
import { RegisterPage } from '../pages/register/register';
import { SigninPage } from '../pages/signin/signin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmployeesPage,
    AddEmployeePage,
    RegisterPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmployeesPage,
    AddEmployeePage,
    RegisterPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
