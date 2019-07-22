# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 13 - Props

YouTube link: https://youtu.be/6nrwHiWN29o

The App component is the parent component to the Ninjas component, and the Ninjas component is the child component. State is one way to store data, and props (meaning “properties”) is another. The parent component can pass data to the child component and then render it with props. In the video, the Net Ninja inserts three property names with their own values in the `<Ninjas />` tag in App.js. In Ninjas.js, he adds a console.log line to log the props object in the console. This didn’t work for me, however. I got a message that the page failed to compile because “props” was not defined. I changed the first line in Nunjas.js to match the first line from the video:

`import React, { Component } from 'react';`

I also changed the function to a class and added the render function from the video:
```
class Ninjas extends Component{
  render(){
```
The code then compiled successfully and the page displayed the props object correctly. This is because the keyword __this__ refers to the component automatically in class-based components, and the __.props__ method puts the props object into the log in the console, which is displayed in the rendered page, showing the information that the Net Ninja put into the props object in App.js. Since changing the component code was necessary in Ninjas.js, I changed the code in Apps.js to match.

In the video, the Net Ninja replaced the data in the Ninjas component with properties. For example:

`<div>Name: { this.props.name }</div>`

After saving, the code compiled and the page displayed the props data:

Name: Ryu

Age: 25

Belt: black

The Net Ninja went on to demonstrate destructuring so that the properties could be stored as variables. In the render function in Ninjas.js, he added the line:

`const { name, age, belt } = this.props;`

In the component, he removed __this.props__ from the lines in the component, leaving just the variable names, e.g. __name__. The code compiled and the page showed the same information. Coding the component this way instead of hard-coding in the data makes it possible to display multiple instances of the same component with different information. He demonstrated by copying and pasting the `<Ninjas />` and tag and changing the information for the name, age, and belt. After compiling, the page displays information for two characters. This shows how one components can be reused many times in different places with different information.
