# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 13 - Props

YouTube link: https://youtu.be/6nrwHiWN29o

The App component is the parent component to the Ninjas component, and the Ninjas component is the child component. State is one way to store data, and props (meaning “properties”) is another. The parent component can pass data to the child component and then render it with props. In the video, the Net Ninja inserts three property names with their own values in the `<Ninjas />` tag in App.js. In Ninjas.js, he adds a console.log line to log the props object in the console. This didn’t work for me, however. I got a message that the page failed to compile because “props” was not defined. I changed the first line in Nunjas.js to match the first line in the video:

`import React, { Component } from 'react';`

I also changed the function to a class and added the render function in the video:

```
class Ninjas extends Component{
  render(){
```
The code then compiled successfully and the page displayed the props object correctly. This is because the keyword __this__ refers to the component automatically in class-based components, and the __.props__ method puts the props object into the log in the console, which is displayed in the rendered page, showing the information that the Net Ninja put into the props object in App.js. Since changing the component code was necessary in Ninjas.js, I changed the code in Apps.js to match.

