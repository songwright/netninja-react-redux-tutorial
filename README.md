# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

Select a branch to to see the notes for each lesson.

Repository files:

https://github.com/iamshaunjp/react-redux-complete-playlist

## 23 – Todo App (part 1)

YouTube link: https://youtu.be/3qk6yQWKVoQ

In the video, the Net Ninja deletes the first React app and then creates a new app called “todoapp.” In my own project, I deleted the old app and created a new app called “todo-app.” The Net Ninja next inserts a link to a Materialize CSS library into the head of the index.html file of his new app. This will allow us to use some nice CSS classes in the app without having to deal with CSS too much. He deletes the App.css file that came with the new app. He also deletes the App.test.js file and the logo. In the App.js file, he deletes the lines that refer to App.css and the logo file. He also deletes the lines containing the header HTML. He creates a new functional component called Todos.js. In App.js, he adds JSX code to the render function for rendering the todos using data from the state. He also creates a function called __deleteTodo__, which will log the i.d. of a todo in the console. In Todos.js, he sets up the todo content to receive a click event. In the browser, clicking on the todo text makes the i.d. of the text appear in the console. The Net Ninja updates the __deleteTodo__ function so that it actually deletes the todo. He uses a __.filter__ method on the state and __this.setState__ to make a new array for the state that filters out the deleted todo. Click on the todo in the browser now deletes it.
