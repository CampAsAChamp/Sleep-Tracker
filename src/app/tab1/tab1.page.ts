import { Component, ɵɵgetFactoryOf, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { StanfordModalPage } from '../stanford-modal/stanford-modal.page'
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public sleepService: SleepService, public modalController: ModalController, public toastController: ToastController, private storage: Storage) { }

  presentSleepTrackModal() {
    this.modalController.create({
      component: ModalPage,
      componentProps: { name: "Inf 133 A" }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        // Checking if the user hit dismiss, as we shouldn't try to add data since the data would be undefined
        if (typeof data.data === 'undefined') {
          return;
        }
        else {
          this.sleepService.logOvernightData(data.data);
        }
      });
    });
  }

  presentStanfordModal() {
    this.modalController.create({
      component: StanfordModalPage,
      componentProps: { name: "Inf 133 B" }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        console.log(data);
        // Checking if the user hit dismiss, as we shouldn't try to add data since the data would be undefined
        if (typeof data.data === 'undefined') {
          return;
        }
        else {
          this.sleepService.logSleepinessData(data.data);
        }
      });
    });
  }


  ngOnInit() {
    // console.log(this.allSleepData);
  }

  saveStorage() {
    // this.storage.set('name', 'Nick');
    // HERE
    this.storage.set('AllOvernight', this.allOvernightData);
    console.log("Saved overnight sleep data into storage");

    this.storage.set("AllStanford", this.allStanfordData);
    console.log("Save Stanford sleep data into storage");
  }

  downloadStorage() {
    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];

    this.storage.get('AllStanford').then((data) => {
      // console.log("My Stanford Data", data);
      for (var i = 0; i < data.length; i++) {
        this.sleepService.logSleepinessData(data[i]);
      }
    });

    this.storage.get('AllOvernight').then((data) => {
      // console.log("My Overnight Data", data);
      for (var i = 0; i < data.length; i++) {
        this.sleepService.logOvernightData(data[i]);
      }
    });
  }

  isArraysEmpty(): boolean {
    if (SleepService.AllOvernightData.length > 0 || SleepService.AllSleepinessData.length > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    // console.log(SleepService.AllSleepData);
    return SleepService.AllSleepData;
  }

  get allOvernightData() {
    return SleepService.AllOvernightData;
  }

  get allStanfordData() {
    return SleepService.AllSleepinessData;
  }

}
