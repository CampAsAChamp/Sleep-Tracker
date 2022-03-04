import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	sleepStart: Date;
	sleepEnd: Date;
	summary: string;

	constructor(sleepStart: Date, sleepEnd: Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;

		// Had to add a summary field as when trying to call the summaryString function after loading data from storage the binding wasn't able to find the function
		this.summary = this.summaryString();
	}

	summaryString(): string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes.";
	}

	dateString(): string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
