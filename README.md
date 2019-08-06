# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 24 - Todo App (part 2)

YouTube link: https://youtu.be/aC-3c7ai5QI

In the video, the Net Ninja creates a new file for a form called AddForm.js. (Later, he renames this to AddTodo.js.) This form will add new todo’s to the state, which will be rendered to the web page by React. The AddTodo.js file is a class-based file that will use a state to store data. In the video, the Net Ninja creates the class component with a state, a render function, and two other functions, one for handling a change in the input field, __handleChange__, and a function for submitting the output to the DOM, __handleSubmit__. As in previous lessons, he uses a spread operator in a function in the root component, App.js, that function being __addTodo__. The __handleSubmit__ function in AddTodo.js sends the output data to __addTodo__. The __addTodo__ function also attaches a random number to the new todo to use as an i.d.

In the video, the Net Ninja sets the “todos” array to be equal to the new “todos” array through __props__.
```
    this.setState({
      todos: todos
    })
```
Since the key and the value both have the same name, “todos,” the line can be shortened:

`      todos`

The Net Ninja also sets up __addTodo__ so that after a user submits a new todo, the function empties the field. He does this by using __this.setState__ in the __handleSubmit__ function in Addtodo.js to set the __content__ prop to be equal to an empty field and then adding a value to the input tag in the form that is equal to the __content__ property of the state.
