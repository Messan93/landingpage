# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.






### start

This project is a requirement for the udacity front-end nanodegree program.
I was giving starter HTML and CSS code for a landing page, and was asked to use JS to dynamically building the navigation menu.

#### process

- with the use of the forEach array method I was able to append the newly created li element into the ul element.

- The scrollTo event was used to scroll smoothly to the approprate section "onClick" of a nabar element. 

- The getBoundingClientRect method was used to determine the position of a section in viewport, and the window.onScroll was passed
a callback function that determine if an element is not in viewport and removes 'your-active-class', else it's in viewport and sets
its class to 'your-active-class'