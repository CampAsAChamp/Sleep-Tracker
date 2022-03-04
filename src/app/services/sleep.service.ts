import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class SleepService {
  public static LoadBackedUpData: boolean = true;
  private static LoadDefaultData: boolean = false;
  public static AllSleepData: SleepData[];
  public static AllOvernightData: OvernightSleepData[];
  public static AllSleepinessData: StanfordSleepinessData[];

  constructor(public toastController: ToastController, private storage: Storage) {


    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];

    if (SleepService.LoadDefaultData) {
      this.addDefaultData();
      SleepService.LoadDefaultData = false;
    }

  }

  presentToast() {
    this.toastController.create({
      message: "Invalid time entered",
      duration: 3000
    }).then((toast) => {
      toast.present();
    });
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
    this.logSleepinessData(new StanfordSleepinessData(3, new Date('November 13, 2019 14:38:00')));

  }

  public logOvernightData(sleepData: OvernightSleepData) {
    var sleepStart_ms = sleepData.sleepStart.getTime();
    var sleepEnd_ms = sleepData.sleepEnd.getTime();
    var difference_ms = sleepEnd_ms - sleepStart_ms;
    // console.log("Difference: " + difference_ms);

    if (difference_ms < 0) {
      console.log("Invalid time specified, can't have negative time");
      this.presentToast();
      return;
    }

    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
  }

  public restoreStorage() {
    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];

    this.storage.get('AllStanford').then((data) => {
      // console.log("My Stanford Data", data);
      for (var i = 0; i < data.length; i++) {
        this.logSleepinessData(data[i]);
      }
    });

    this.storage.get('AllOvernight').then((data) => {
      // console.log("My Overnight Data", data);
      for (var i = 0; i < data.length; i++) {
        this.logOvernightData(data[i]);
      }
    });
  }
}
