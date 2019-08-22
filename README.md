# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 36 - Redux Actions

YouTube link: https://youtu.be/FGCsuwIORb0

The Net Ninja demonstrates Redux action in a codepen.io page. He creates an action in a JavaScript object in a constant called __todoAction__. The first property of the action describes the type. The second property is an arbitrary prop which he calls “todo.”

`const todoAction = { type: 'ADD_TODO', todo: 'buy milk'};`

To dispatch the action he uses a __.dispatch__ method on the store constant.

`store.dispatch(todoAction)`

Next, he puts a console.log function in the reducer that prints the action and the state in the console.
```
function myreducer(state = initState, action){
  console.log(action, state);
}
```
He shows in the codepen.io page how the console first prints the state as an object and then prints the value of __todoAction__ as another object. The state is still empty. Typically, you use a dispatch from a component to update the state. That goes to the reducer, which does something with that action.
