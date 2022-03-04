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
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public sleepService: SleepService, public modalController: ModalController, public toastController: ToastController, private storage: Storage) { }

  ngOnInit() { }

  presentSaveToast() {
    this.toastController.create({
      message: "Saved Overnight and Standford sleep data into storage",
      duration: 3000
    }).then((toast) => {
      toast.present();
    });
  }

  presentDownloadToast() {
    this.toastController.create({
      message: "Loaded Overnight and Standford sleep data from storage",
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }

  presentClearedToast() {
    this.toastController.create({
      message: "Cleared Overnight and Standford sleep data from storage",
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }

  saveStorage() {
    // this.storage.set('name', 'Nick');
    this.storage.set('AllOvernight', SleepService.AllOvernightData);
    console.log("Saved overnight sleep data into storage");

    this.storage.set("AllStanford", SleepService.AllSleepinessData);
    console.log("Save Stanford sleep data into storage");
    this.presentSaveToast();
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

    this.presentDownloadToast();
  }

  deleteStorage() {
    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];

    this.storage.clear();
    console.log("Cleared all storage");
    this.presentClearedToast();
  }

  printStorage() {
    console.log(SleepService.AllOvernightData);
    console.log(SleepService.AllSleepinessData);
  }
}
