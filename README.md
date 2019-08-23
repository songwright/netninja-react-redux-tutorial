# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 39 - Setting up Redux in React

YouTube link: https://youtu.be/f87wPQMgF4c

In this video, the Net Ninja adds Redux into the Poketimes app project by using an __npm install__ command from a terminal. Next, he installs a store by adding an __import__ line in the index.js file and also by assigning __createStore()__ to a constant called __store__. React needs a component called “Provider” to interact with Redux, so the Net Ninja installs it with an __import__ line. On the <App> tag line, he wraps the __App__ with a `<Provider>` tag that uses __store__ as a variable value for its store attribute.

`ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));`

In the “src” folder he makes a new folder called “reducers.” This is necessary in some large apps that use multiple reducers. You have to store them all in one place. In some apps, it’s useful to combine several reducers into one reducer, but that won’t happen in this tutorial. In the “reducers” folder, he creates a new file called “rootReducer.js”. The first function is an arrow function stored in a constant called __rootReducer__ that returns the __state__. It takes the __state__ and an action as parameters. To give the __state__ a default value, he sets it to be equal to the constant __initState__ which contains an empty property called __posts__. The last line in the file exports __rootReducer__ to index.js, and in the index.js file the Net Ninja inserts a line to import __rootReducer__.

`import rootReducer from './reducers/rootReducer'`

He associates __rootReducer__ with the __createStore__ function by passing __rootReducer__ in as a parameter in __createStore__, thus connecting it with the store. The store is also being connected to the App here through the Provider, which is wrapping around the `<App>` tag. All this gives the App access to the store.