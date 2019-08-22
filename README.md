# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 35 - Redux Stores

YouTube link: https://youtu.be/sNyXE35liAE


In the video, the Net Ninja talks about how Redux is a JavaScript object that represents the global state of the application. The reducer is a function that interacts with the store in the Redux in order to change the state of the data in the store. The store is like a data warehouse. The reducer is like a robot that stands guard at the door of the warehouse. Only the robot has access to the warehouse and can change the state of the store. When this robot receives actions from elsewhere in the app, it uses them to update the state inside the warehouse store. This way, one and only one thing updates the state, and that is the reducer, or the robot, in this metaphor.

In this lesson, the Net Ninja demonstrates how to create a Redux store by entering code in codepen.io. To do this, you first have to click on the settings gadget and install the React Redux library in codepen:

`https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0-rc.1/redux.js`

The JavaScript preprocessor has to be set for Babel.

In the JS panel in codepen, the Net Ninja uses destructuring to declare a constant called __createStore__ which is equal to __Redux__. This will take __createStore__ from the Redux library and store it in the __createStore__ constant.

`const { createStore } = Redux;`

Next, he creates a store with a reducer. We’re passing the reducer into the store as a parameter because the two are tightly coupled in Redux. This way, the store knows which reducer is interacting with it.

`const store = createStore(myreducer);`

He creates a function for the reducer. A reducer is just a function that interacts with the store.
```
function myreducer(state = initState, action){
  //
}
```
The function has an initial state that it gets from a constant called __initState__.
```
const initState = {
  todos: [],
  posts: []
}
```
This __initState__ constant contains dummy data that will be replaced later. For now, it gets passed into the __myreducer__ function. Using an equation as the parameter makes it the default value for the state.
