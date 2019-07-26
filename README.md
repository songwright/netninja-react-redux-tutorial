# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 15 - Stateless Components

YouTube link: https://youtu.be/o4GCcSn-hEw

There are a couple of different types of components in React, __container components__ and __UI components__. Container components contain data in their states. They are created with classes. They are not involved with the user interface. UI components don’t contain state and have to get their data from container components. They present the data to the user with the user interface. They are created with functional components.

App.js is a container component. It may contain UI components or other container components.

In the video, the Net Ninja deletes the class in the Ninjas.js file and replaces it with an arrow function. He removes the render function, which is only needed in class-based components. He removes the `{ Component }` code from the import line at the top because this file is no longer extending a class component. When the development server puts the page in the browser, it fails to render because of an error. The error message in the console reads:

Uncaught TypeError: Cannot read property 'props' of undefined

The Net Ninja explains that this is because a UI function does automatically get the __props__ passed in from the container function. He fixes this by passing in __props__ as a parameter in the arrow function.
`const Ninjas = (props) => {`
This means that the keyword __this__ is no longer necessary in the reference to props in the function.
`const { ninjas } = props;`
In the browser, the page now renders correctly.

The Net Ninjas points out that he uses destructuring so that he won’t have to use a line to contain props in a const. He removes the line
`const { ninjas } = props;`
and replaces the parameter __props__ with __{ninjas}__ in the arrow function. It’s possible to put more props in the curly braces after __ninjas__ if there were more props in the app. They would be separated by commas.
