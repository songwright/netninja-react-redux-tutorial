# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 14 - Outputting Lists

YouTube link: https://youtu.be/At7yOlWkqRQ

In the App, the `<Ninjas />` tag has to be repeated for each individual ninja game character. In the video, the Net Ninja says that you can use a list of ninjas instead. One component tag would receive the data for all the ninjas, cycle through them, and output each ninja in that component. He creates a state in the App component so that he can pass a property of the state into the component. The property is an array of objects called “ninjas.” Each object contains the data for a ninja character. He changes the `<Ninjas />` tag so that it will pass the state into the Ninjas component as a prop.

`<Ninjas ninjas={this.state.ninjas} />`

In Ninjas.js, he changes the constant so it can have access to the “ninjas” array in App.js.

`const { ninjas } = this.props;`

He points out that this is the same as this declaration,

`const ninjas = this.props.ninjas;`

but uses destructuring to do the same thing. To render each ninja to the DOM, he uses the __.map__ method to map one array to another array. To do this, he creates a constant called __ninjaList__ that contains a arrow function. This arrow function returns a JSX component for each ninja that it cycles through in the array. After saving, the development server compiles and renders it to the browser. A listing appears for each ninja with information for that ninja from the array. In the video, the Net Ninja points out that the following error message appears in the console:

Warning: Each child in a list should have a unique "key" prop.

React needs a key identifier for each ninja so that React knows which one it is. This is so that React can identify each DOM element that uses a prop with that prop in the state. Later, if React needs to delete that element, it will know which prop goes with that DOM element. To prevent the error warning, he adds an attribute to the parent div in the JSX template which contains the id value from the array:

`<div className="ninja" key={ninja.id}>`

The code compiles successfully and renders to the browser with no errors.
