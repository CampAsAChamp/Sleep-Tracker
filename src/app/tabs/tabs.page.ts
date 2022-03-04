import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  numRecords: number
  constructor(public sleepService: SleepService) { }

  ngOnInit() {
  }

  get numSleepRecords() {
    // console.log(SleepService.AllSleepData);
    return SleepService.AllSleepData.length;
  }



}
