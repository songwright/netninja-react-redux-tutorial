# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 29 - Using Axios

YouTube link: https://youtu.be/4uzEUATtNHQ

For this tutorial, we’ll be using a third-party REST API to get some dummy data from. This will come from a website called jsonplaceholder.typicode.com. To get data from another website to appear on your web page using a REST API, you can use an HTTP request library called Axios. It has to be installed as a separate package in your app. In the video, the Net Ninja opens a terminal in Visual Studio Code and types __npm install axios__. This tells Node to install Axios. One way to get external data is through the lifecycle hook __componentDidMount__. To do that through a component, such as the Home component, you have to convert the component into a class-based component (functional components can’t use lifecycle hooks). In the video, the Net Ninja rewrites the top lines in the Home.js file to turn it into a class-based component.
```
import React, { Component } from 'react';

class Home extends Component {
  render() {
```
Above the render function he creates a function called __componentDidMount__ that uses Axios to get posts from the jsonplaceholder website mentioned above. He explains that this is an asynchronous task, meaning that it takes time to do, so the process will wait until that function is finished getting the posts. This task uses Promise technology, which allows contingent tasks to run when the promise is completed using __.then__. He chains a __.then__ to the __.get__ that includes a callback function which logs the response in the console. In the browser, the response is visible in the console as an object. The __data__ property in the object contains a hundred posts. If we want to display those posts in the web page, we have to create a __state__ in the Home.js file. This __state__ will have an empty array called __posts__ which will only be empty because this function won’t any posts when this function starts. We can pass the posts to the array from the __data__ property using the function in __.then__. The Net Ninja uses __this.setState__ to get the first ten posts from the data. In the render function he creates a constant for the posts and another constant called __postList__ containing a ternary operator that returns JSX blocks for the posts. When the file is saved, the web page shows the first ten posts in the home component.
