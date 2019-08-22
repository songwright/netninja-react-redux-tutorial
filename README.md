# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 36 - Redux Actions

YouTube link: https://youtu.be/FGCsuwIORb0

The Net Ninja demonstrates a Redux action in a codepen.io page. He creates an action, which is a JavaScript object that he stores in a constant called __todoAction__. The first property of the action describes the type. The second property is an arbitrary prop which he calls “todo.”

`const todoAction = { type: 'ADD_TODO', todo: 'buy milk'};`

To dispatch the action he uses a __.dispatch__ method on the __store__ constant.

`store.dispatch(todoAction)`

Next, he puts a __console.log__ function in the reducer that prints the action and the state in the console.
```
function myreducer(state = initState, action){
  console.log(action, state);
}
```
He shows in the codepen.io page how the console first prints the state as an object
```
Object {
  posts: [],
  todos: []
} Object {
  todo: "buy milk",
  type: "@@redux/INITb.k.z.n.6.k"
}
```
and then prints the value of __todoAction__ as another object.
```
Object {
  posts: [],
  todos: []
} Object {
  todo: "buy milk",
  type: "ADD_TODO"
}
```
The state is still empty. Typically, you use a dispatch from a component to update the state. That goes to the reducer, which does something with that action.
