Video on Demand Application
===========================

this is simple Media App VOD (Video On-Demand) application that keeps track of a list of videos the user has watched. using the API for a video list https://demo2697834.mockable.io/movies

Live demo is available in [this link](http://vod-cloudbyte.rhcloud.com/).

##Set-Up Locally
---

1. Install nodejs (http://nodejs.org/download/)
2. Clone or download the project in to pc.
3. for running on local change line number 49 and uncomment 52,53 from server.js
4. change the port number from config.js line number 6
3. Run ``` npm install ``` to install all node module dependancies 
4. Run ```  node index.js ``` to run the application
5. Application web app will be availabe in http://localhost:3000/ 

## Features

- Load a list of horizontal carousel on the home page which can be scrollable videos from a [sample api](			 https://demo2697834.mockable.io/movies). 
- Alllows to select a video from the view and play in full screen
- User can use either mouse or keyboard left, right arrow keys to select a video
- User can play video by clicking the play button of a video tile or by pressing enter key once seleted a tile.
- User will be able to view all the videos watched previously by clicking History icon in header.
- User can play videos in history view by clicking on video caption images
- Once a video is finished playing, full screen video view will be automatically closed.


##Aplication Architechture

Appication can be basically devided in to two parts as client and server. All the files related with the client side ui rendering of the app is available in **/public/app** folder. The business logic and UI flow of the client app is independent from rest of the codes. If the files and folders in **/public/app** put in to apache web server, web app should run without any issue.

Nodejs server of the app is built on top of expressjs. Server exposes some restfull web services to save and retrieve data.
Both client and the server codes follow MVC architectture which seperates layers of the system clearly. 

##Deployment

Application is deployed on openshift, nodejs hosting environment using continuous deployment feature for openshift projects.( Each git push to the master branch is automatically deployed ).

##Tracking Users Without User Authentication

This application does not requre user authentication to view video history of users. User detection is done by a unique key generated based on browser settings and other key finger prints. For this perpose [fingerprint2]( https://github.com/Valve/fingerprintjs2) library is used with default options to generate key. 

##Run Tests

To run the test cases in /test/*.test.js files, please refer to folowing steps

1. Install [mocha](https://www.npmjs.com/package/mocha) testing framework globaly by running ``` npm install -g mocha ```
2. From the root folder of the app run ``` mocha test/{{testfilename}} ```

## Coding Concerns

ES6 coding is not used in the app to prevent risk of deployment issues of app( within 1 week of time).Grunt is not used since its better to keep the simplicity of app for this level of requirments. Code should be self explanatory in most of the cases.

Prototype inheritance based models structure is created for server to improve code reusability.

