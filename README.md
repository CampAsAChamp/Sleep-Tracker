# Sleep-Tracker
Sleep Tracker App built in Ionic, Angular, &amp; Typescript

Features
- The ability to log overnight sleep
- The ability to log sleepiness during the day
- The ability to view these two categories of logged data
- Either using a native device resource or backing up logged data
- Following good principles of mobile design
- Creating a compelling app

Resources Consulted
- Ionic Documentation (not very good btw)
    - Tabs
    - FAB
    - Action Sheet (Wasn't a good user flow)
    - Icons
    - Datetime
    - Radio Group
    - Modal Pages
    - Routing
    - Splash Screen (Couldn't get working)
    - Header/Footer
    - Grid
    - Popover Controller (Didn't end up using)
    - Generate
    - Toolbar
    - Storage
- https://ampersandacademy.com/tutorials/ionic-framework-4/ionic-4-tabs-example-from-scratch-step-by-step-tutorial
- https://www.freakyjolly.com/ionic-4-how-to-add-tabs-bar-and-create-tab-navigation-in-ionic-4-application/ (Fixing my routing)

Things to know to run
- For the storage I went with a backup/restore workflow. So when the user clicks backup, whatever data is in the other tab will be saved and can be restored/retrived by tapping the restore button. 
- Users can also clear all data they have stored before

How can a person log overnight sleep in your app?
- Person goes to the Sleep Data tab, where the user can then tap the plus FAB button, and then the alarm clock FAB.
  Then a modal page pops up with date pickers to select a start & end day, as well as a start & end time.
  The dates along with the times are checked for validation to make sure the user doesn't enter a time that would result in a negative sleep time.


How can a person log sleepiness during the day in your app?
- Person goes to the Sleep Data tab, where the user can then tap the plus FAB button, and then the moon FAB.
  Then a modal page pops up with 7 radio buttons where the user can find which sleepiness level best represents how they are currently feeling.
  Since it is a radio group, users have a pre-determined set of choices they can make. For example users can't select 0 or 8 as their current level.

How can a person view the data they logged in your app?
- Person goes to the Sleep Data tab, in the main center of the view their past entries display as cards.
- Stanford sleepiness entries display the day and time when the user entered their sleepiness data. It also displays the numerical rating along with the sleepiness description.
- Overnight sleepiness entries display the days entered tracking sleep. 
It also displays the start and end time of sleep, along with a total line as well so the user can quickly see how many hours of sleep they got on a particular entry.


Native device resource, backing up logged data, or both?
- Backing up logged data.
- when the user clicks backup, whatever data is in the other tab will be saved and can be restored/retrived by tapping the restore button. 
- Users can also clear all data they have stored before


Where does it back up to?
- Backed up using Ionic Storage (free open source), which uses SQLite behind the scenes.
- It backs up the overnight and stanford sleepiness entries.
- These entries can be retrived later using the restore button.

Extra features
- Added tabs to clearly separate different features of the app. The entry and viewing of sleep data is in one tab, and the backup/restore of the data is in a separate tab of the app.
- Added badge to display how many entries a user has entered so far. Nice feature so the user can quickly and easily see how many times they have logged in the app.
