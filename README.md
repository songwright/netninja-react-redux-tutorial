# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 37 - Redux Reducers

YouTube link: https://youtu.be/w3okdbomqxo

The Net Ninja changes the reducer function. The purpose of the reducer is to change the state. He uses an __if__ statement to test if the __action.type__ is equal to __'ADD_TODO'__. If it is, the function returns the new state of the store. This new state contains elements of the __state.todos__ and the __action.todo__ properties.

`todos: [...state.todos, action.todo]`

Nothing happens when he runs the program, so this is just a setup for the next video.
