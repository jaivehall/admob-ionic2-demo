import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  AdMobPro } from '../../providers/admobpro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AdMobPro]
})
export class HomePage {
  constructor(public navCtrl: NavController, private adMobPro: AdMobPro) {
  }

  showBanner(){
  	console.log('showBanner');
  	this.adMobPro.showBanner();
  }
  removeBanner(){
  	console.log('removeBanner');
  	this.adMobPro.removeAds();
  }
  showInterstitial(){
  	console.log('showInterstitial');
  	this.adMobPro.showInterstitial();
  }
}
