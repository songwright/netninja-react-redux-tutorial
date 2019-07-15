# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 9 – Intro to Forms

YouTube link: https://youtu.be/BVbdZ1133JU

The Net Ninja removes the functions and simplifies the page to show only “My name is“ to set up the next lesson. He adds a form button with a text input and an attribute called __onChange__ which gets the value __this.handleChange__. He makes a new arrow function called __handleChange__ that changes the state when a user clicks on the button using the __setState()__ method on __this__. He gets the text from the button submit event using __e.target.value__. In the page, the name will now change live as the user enters the new name, before clicking the “Submit” button. At this point, clicking the button will seem to revert the name back to the original value. This is the default behavior of refreshing the page. To change this behavior, the Net Ninja puts the attribute __onSubmit__ in the `<form>` tag. Putting the attribute in this tag rather than in the `<button>` tag will allow the form to send the data whether the user clicks the button or hits the Enter key. He gives the function __handleSubmit__ the line `e.prevenDefault();` to prevent the page refresh. The __onSubmit__ attribute gets the value __this.handleSubmit__. Lastly, the Net Ninja adds a line to __handleSubmit__ that logs the input name to the console.