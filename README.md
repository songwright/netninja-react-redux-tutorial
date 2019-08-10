# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 28 – Higher Order Components

YouTube link: https://youtu.be/hKvV0euP3mY

Higher order components are functions that wrap around other components and give them extra features.

In the example from the last lesson, the Navbar got extra features from a higher order component called __withRouter__ that gave it extra information about the router in the __props__ object.

In the video, the Net Ninja creates a new folder in the app called "hoc" and creates a new file in this folder called "Rainbow.js." The higher order component will be a function in this file, an arrow function called __Rainbow__. This function picks a random color from an array of six colors and concatenates the name of the color with “-text” in a variable called __className__. A return statement uses props as a parameter to return a __WrappedComponent__ which is wrapped in a `<div>` that uses the __randomColor__ as a class. The result should be that the text on the web page will be the color of the random color. We pass the component currently being served into the component in the JSX block in Rainbow.js with curly braces and a spread operator.

`<WrappedComponent {...props} />`

To use this component in the About page, he adds an __import__ line to the beginning of the About.js file and changes the __export__ line so that __About__ is wrapped in the Rainbow component.

`export default Rainbow(About)`

Once saved, the About page now displays text in one of six random colors whenever it is refreshed.
