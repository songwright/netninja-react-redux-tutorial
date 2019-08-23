# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 38 - Store Subscriptions

YouTube link: https://youtu.be/0r3eKhWag-8

We’ve done most of the steps needed for Redux. We created a store and a reducer which is passed into that store. We also dispatched an action, which is going into the reducer. The reducer is taking that action and updating the state in the store. All that’s left is to subscribe to the store and react to changes in the store. Since this normally happens in a component and Net Ninja is using codepen.io, he uses the pen that he started in previous videos so he won’t have to make a whole new component.

The Net Ninja uses tow methods, __store.subscribe__ and __store.getState__, to log the current state in the console.
```
store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
})
```
When he runs this program, it prints the state in the console.
```
Object {
  todos: ["buy milk"]
}
```
The problem now is that the state is just one property, “todos.” The empty “posts” property should have printed, but didn’t. How do you get everything in the current state, even the empty things? With a spread operator. He adds one to the __return__ function in the reducer.

`...state,`

When the program runs, the empty posts property gets printed in the console.
```
Object {
  posts: [],
  todos: ["buy milk"]
}
```
For the last demonstration, he adds another __if__ statement in the reducer that tests for __'ADD_POST'__ actions. At the end of the program he replaces the current__ store.dispatch__ with three new ones, two that update todo’s and one for a new post.
```
store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
store.dispatch({type: 'ADD_TODO', todo: 'sleep some more'});
store.dispatch({type: 'ADD_POST', post: 'Egg hunt with yoshi'})
```
When he runs the program, the console shows the state being updated three times, each time getting the next new change from the subscription. This is the basic way that Redux works.
