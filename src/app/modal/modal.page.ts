import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
// import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() name: string;
  overnightData: OvernightSleepData;
  sleepStartDay;
  sleepEndDay;
  sleepStartTime;
  sleepEndTime;



  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
    this.name = "Nick";
    /*
    var hrs = (this.currentTime.getHours() + 24) % 12 || 12;
    var mins = String(this.currentTime.getMinutes()).padStart(2, '0');
    var AMorPm = ((this.currentTime.getHours() < 12) ? "AM" : "PM")
    */
  }

  modalDismiss() {
    this.modalController.dismiss();
  }

  modalSave() {
    // Start Day

    // The day on the sleepStartDay is correct but the time isn't
    // We need to take the time from sleepStartTime
    // Slice the day from sleepStartDay and the time from sleepStartTime and combine into one string
    var startDayIndex = this.sleepStartDay.indexOf('T');
    var startDay = this.sleepStartDay.slice(0, startDayIndex);

    var startTimeIndex = this.sleepStartTime.indexOf('T');
    var startTime = this.sleepStartTime.slice(startTimeIndex);

    var startDateString = startDay + startTime;
    var startDate = new Date(startDateString);

    // console.log("Day: " + startDay);
    // console.log("Time: " + startTime);
    // console.log("String: " + startDateString);
    // console.log("My Date: " + startDate);

    // End Day 
    var endDayIndex = this.sleepEndDay.indexOf('T');
    var endDay = this.sleepEndDay.slice(0, endDayIndex);

    var endTimeIndex = this.sleepEndTime.indexOf('T');
    var endTime = this.sleepEndTime.slice(endTimeIndex);

    var endDateString = endDay + endTime;
    var endDate = new Date(endDateString);

    // Create overnight data with the two dates
    this.overnightData = new OvernightSleepData(startDate, endDate);
    this.modalController.dismiss(this.overnightData);
  }


}
