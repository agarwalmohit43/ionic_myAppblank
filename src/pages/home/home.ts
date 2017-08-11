import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirstPage} from "../first/first";
import {NavigationPage} from "../navigation/navigation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openFirstPage(){
    this.navCtrl.push(FirstPage);
  }

  openNavPage(){
    this.navCtrl.push(NavigationPage);
  }

}
