import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-stanford-modal',
  templateUrl: './stanford-modal.page.html',
  styleUrls: ['./stanford-modal.page.scss'],
})
export class StanfordModalPage implements OnInit {

  selectedRadioGroup: number;
  stanfordData: StanfordSleepinessData;


  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  stanfordModalDismiss() {
    this.modalController.dismiss();
  }

  stanfordModalSave() {
    // Save the selected value on the radio group and create a card based on it
    this.stanfordData = new StanfordSleepinessData(this.selectedRadioGroup);
    this.modalController.dismiss(this.stanfordData);
  }

  radioGroupChange(event) {
    // console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
  }

}
