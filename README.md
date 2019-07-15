# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 8 - Changing State (and 'this')

YouTube link: https://youtu.be/XJzDF9bj368

The Net Ninja talks about how the keyword __this__ refers to scope in different ways from different parts of the app. You can access __this.state__ in the template, for example, but not in the functions. In JavaScript, the value of the keyword __this__ depends on where it’s called not on where it lives in the code. If the keyword __this__ gets called from the DOM and then calls the keyword __this__ in a function, the value of the keyword __this__ will be lost. This is part of the normal behavior of JavaScript. In React, when we use class components like this one, we have to manually bind the context of this keyword to the function. We don’t have to do that in the template because React automatically binds the context inside the function. The easiest way to bind the keyword __this__ in the function is to use an arrow function. The Net Ninja demonstrates by changing the __handleClick__ function into an arrow function, with a call to log the state in the console.

```
      handleClick = (e) => {
        // console.log(e.target);
        console.log(this.state);
      }
```

This time, when the user clicks on the button, the event object gets logged in the console instead of just the HTML code because the object is the current state of the keyword __this__. Arrow functions have a special behavior with respect to the keyword __this__. The behavior will bind the value of __this__ to whatever __this__ is outside of the function. The value of the keyword __this__ inside the component is just a component instance. That instance is what gets bound to __this.state__ in the __handleClick__ function. Using an arrow function is only necessary if we want to access the instance of the component. There is more information about the need to bind the keyword __this__ in the article in this link:

https://www.freecodecamp.org/news/__this__-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

The Net Ninja shows that, within the arrow function, it is possible to change the state using the method `setSTate({})`. An object gets passed into the curly braces. In the example, he changes the name:

```
        this.setState({
          name: 'Yoshi'
        })
```

Now, when the user clicks on the button, the name changes to “Yoshi.” He later adds a change to the age in the button function.