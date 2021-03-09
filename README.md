# CAPSTONE #

## Trip weather journal app ##

### Overview ###

This web app is created for the last Front-End nanodegree project at Udacity and manages 3 API calls.  
The aim of this simple app is to request some inputs from the user, such as the destination, departure and return date for a programmed trip. As those inputs are submitted, the first thing the app fetches is the coordinates of the destination. Then, as soon as this data is back, it makes another fetch to a weather API to receive the forecast for the coordinates previously stored. The last API is called to receive an image for the city where the user will travel.  

### Front-End dependencies ###

The development of this web app includes: 
- For the front-end: webpack and its loaders and plugins;
- For the back-end: Node.js and express server;

### Instruction ###

In order to run correctly this app you need all the dependecies that are used in it, then you have to run the express server to make the page go interactively.

1. install all dependencies:  
    ```npm i``` or ```npm install```

2. run the express server:  
    ```npm start```

3. open the browser at the following url:  
    http://localhost:8081

Once you completed all the above steps you are ready to use the web app.

#### For developers ####

The app has two running modes, one is for production and the other for development. In order to run the correct mode here the command you need:
- production mode:
    ```npm run build-prod``` and then follow the previous instructions;
- development mode:
    ```npm run build-dev``` this opens directly your default browser and refreshes automatically if you make a change in the code;

The app folder has also some test file to check if some javascript functions and scripts are running correctly or there some errors to debug. In order to run that test you have to digit the command ```npm jest``` and you see the test results on your terminal.