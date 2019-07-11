# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 5 - State

YouTube link: https://youtu.be/yuN4EMjR4K4

“Component state” simply describes the state of a component in the terms below:

Component State
*	JavaScript Object
*	Describes the current state of the component
    *	data, UI-state
*	The state of a component can be updated over time
    *	a modal could close
    *	the data we output could change

Example:

Shopping Cart Component
```
{
  items: [
    { name: 'navy jumper', price: 9.99 },
    { name: 'ninja mask', price: 20.00 }
  ]
}
```

This is the current state of the shopping cart component. If a user added something to the shopping cart, the state would change. A new object would be added to the array.
```
{
  items: [
    { name: 'navy jumper', price: 9.99 },
    { name: 'ninja mask', price: 20.00 },
    { name: 'black cloak', price: 15.00 }
  ]
}
```

The new state of the component would update the display of that data dynamically with React. In a similar way, a pop-up could have two possible states:
```
{
  showPopUp: true
}

{
showPopUp: false
}
```

If true, it shows on the screen. If not true, it doesn’t show up.

In the index.html, the Net Ninja adds a line for the state of the component before the __render()__ block. The __state__ is simply a JavaScript object containing definable properties. In the `<p>`, tag, he removes the math code and adds text before the curly braces, “My name is”. Between the curly braces he adds dynamic data using methods from the state: __this.state.name__. This will output the name “Ryu” in the web page. He adds more text to the sentence and then adds dynamic data for the age: __this.state.age__. The web page now reads, “My name is Ryu and I am 30.” The state can be changed so that the age is 35. The web page will show 35 as the age.