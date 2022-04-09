<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CampAsAChamp/Sleep-Tracker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Sleep Tracker</h3>

  <p align="center">
    Sleep Tracker app for both iOS and Android built using Ionic
    <br />
    <br />
    <a href="https://github.com/CampAsAChamp/Sleep-Tracker">View Demo</a>
    ·
    <a href="https://github.com/CampAsAChamp/Sleep-Tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/CampAsAChamp/Sleep-Tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#resources-consulted">Resources Consulted</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">

![product-screenshot]

</div>

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/)
* [Ionic](https://ionicframework.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Features
- The ability to log overnight sleep
- The ability to log sleepiness during the day
- The ability to view these two categories of logged data
- Following good principles of mobile design

## Extra features
- Added tabs to clearly separate different features of the app. The entry and viewing of sleep data is in one tab, and the backup/restore of the data is in a separate tab of the app.
- Added badge to display how many entries a user has entered so far. Nice feature so the user can quickly and easily see how many times they have logged in the app.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* **Node.js**
* **Node Package Manager (NPM)**

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/CampAsAChamp/Sleep-Tracker.git
    ```
2. Download dependencies
    ```sh
    npm install    
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
### Usage

1. Start up the project
   ```sh
   npm run-script start
   ```
2. Visit `localhost:4200` in your web browser


<p align="right">(<a href="#top">back to top</a>)</p>

## Resources Consulted
- Ionic Documentation
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

## FAQ
#### Things to know to run
- For the storage I went with a backup/restore workflow. So when the user clicks backup, whatever data is in the other tab will be saved and can be restored/retrived by tapping the restore button. 
- Users can also clear all data they have stored before

#### How can a person log overnight sleep in your app?
- Person goes to the Sleep Data tab, where the user can then tap the plus FAB button, and then the alarm clock FAB.
  Then a modal page pops up with date pickers to select a start & end day, as well as a start & end time.
  The dates along with the times are checked for validation to make sure the user doesn't enter a time that would result in a negative sleep time.


#### How can a person log sleepiness during the day in your app?
- Person goes to the Sleep Data tab, where the user can then tap the plus FAB button, and then the moon FAB.
  Then a modal page pops up with 7 radio buttons where the user can find which sleepiness level best represents how they are currently feeling.
  Since it is a radio group, users have a pre-determined set of choices they can make. For example users can't select 0 or 8 as their current level.

#### How can a person view the data they logged in your app?
- Person goes to the Sleep Data tab, in the main center of the view their past entries display as cards.
- Stanford sleepiness entries display the day and time when the user entered their sleepiness data. It also displays the numerical rating along with the sleepiness description.
- Overnight sleepiness entries display the days entered tracking sleep. 
It also displays the start and end time of sleep, along with a total line as well so the user can quickly see how many hours of sleep they got on a particular entry.


#### Native device resource, backing up logged data, or both?
- Backing up logged data.
- when the user clicks backup, whatever data is in the other tab will be saved and can be restored/retrived by tapping the restore button. 
- Users can also clear all data they have stored before


#### Where does it back up to?
- Backed up using Ionic Storage (free open source), which uses SQLite behind the scenes.
- It backs up the overnight and stanford sleepiness entries.
- These entries can be retrived later using the restore button.
- 

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[contributors-url]: https://github.com/CampAsAChamp/msPaintAutomation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[forks-url]: https://github.com/CampAsAChamp/msPaintAutomation/network/members
[stars-shield]: https://img.shields.io/github/stars/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[stars-url]: https://github.com/CampAsAChamp/msPaintAutomation/stargazers
[issues-shield]: https://img.shields.io/github/issues/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[issues-url]: https://github.com/CampAsAChamp/msPaintAutomation/issues
[license-shield]: https://img.shields.io/github/license/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[license-url]: https://github.com/CampAsAChamp/msPaintAutomation/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
