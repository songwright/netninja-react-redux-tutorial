# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 12 – Nesting Components

YouTube link: https://youtu.be/dQublHlGgBw

The root component is the mother of all components in React.


Typically, React apps have one root component which is always rendered to the DOM. Later, React can render other components that are nested inside the root component. The Navbar.js component is nested in the root component before the app renders it, for example.

In the video, the Net Ninja makes a new file in the "src" folder called ninjas.js. He copies the first line from App.js to Ninjas, but the equivalent line in my app is different. His line reads

`import React, { Component } from 'react';`

but my line reads:

`import React from 'react';`

The Net Ninja creates a function called __Ninjas__ with a __div__ that has a classname with the value “ninja”. In this __div__ he creates three more __div__s with statistics for a character. At the bottom of the file he puts

`export default Ninjas;`

In the App.js file, he inserts a line at the top that imports the Ninjas component from the Ninjas.js file and adds a self-closing line in the JSX block with the keyword Ninjas in it. When this file is saved, the development server renders the Ninjas component under the rest of the content of the web page.

At the end of the video, the Net Ninja says that the way to make the component dynamic is to use props.