# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 17 - Forms Revisted

YouTube link: https://youtu.be/W--bMoQncPM

The Net Ninja sets up the lesson by getting rid of the embedded JSX in the return statement in Ninjas.js and restoring the __if__ statement. He sets up a form for adding a new ninja by creating a new form file called “AddNinja.js”. This is a class-based component with state, which is necessary so that it can take input data. He first creates a render function with JSX code for a `<form>` with three inputs. Each `<input>` uses __htmlFor__ instead of __for__ in the preceding label in order to identify it because JSX uses __htmlFor__ (remember, this looks like HTML but it’s not). The inputs are for the name, age, and belt of a character. Above the render function he creates a state with props for name, age, and belt. He makes an arrow function called __handleChange__ that uses __this.setState__ to change the state after getting the values in the form from a target event. He uses __e.target.id__ to get the i.d. from each input, for example, “name,” and then e.target.value gets the input value.
```
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
```
He makes another function called __handleSubmit__ to handle the submit event on the form. This function prevents the default event of refreshing the page and logs the state of AddNinja.js in the console.

