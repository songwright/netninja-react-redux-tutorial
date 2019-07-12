# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 7 - DOM Events

YouTube link: https://youtu.be/-ZB8I2PmiOw

Whenever a state changes in React, the change gets rendered in the DOM. In the React tab in dev tools, when you click on the settings icon, you can check a box called “Highlight Updates.” This will highlight live changes to the DOM with a flash of a focus ring.

The Net Ninja adds a button to the index.html with an __onClick__ attribute equal to a pair of empty curly braces and inner text “Click me.” In the App, he creates a new function called __handleClick__ that uses the default variable __e__ to pass in the event. The function logs the target, __e.target__, into the console log. He uses __this.handleClick__ as the value for __onClick__ in the button. We don’t use parentheses on __this.handleClick__ because that would invoke the function when the page loads and we don’t want that. In the page, when you click on the button, the code `<button>Click me</button>` appears in the console log. He creates another button using the __onMouseOver__ attribute and creates a function called __handleMouseOver__. This function will log the event itself in the console when the mouse cursor hovers over the button. He changes the function to get the target of the event and then get the __pageX__ of the target, which is the x-coordinate position of the event on the page. Events with values like `<button>Hover me</button> 119` appear in the console.