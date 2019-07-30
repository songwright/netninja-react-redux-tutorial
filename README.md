# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 18 – Functions as Props

YouTube link: https://youtu.be/0EAr12s8vkM

The Net Ninja explains that if you want to transfer information from the local state in AddNinja.js you have to create a function in the root component App.js and then pass that function as a prop into AddNina.js. He creates the __addNinja__ function in App.js and then adds it to the props tag.

`<AddNinja addNinja={this.addNinja} />`

In AddNinja.js, he adds a line to __handleSubmit__ that gets access to the __addNinja__ function and passes the local state to that function.

`this.props.addNinja(this.state);`

In the video, when he enters data into the web page, the object containing the data appears in the console, like before, but this time it’s coming from App.js instead of AddNinja.js.

Having established a link between the child component AddNinja.js and its parent, App.js, we need to add the input data to the page. The Net Ninja explains that we can’t simply push the data into the existing array in the state in AddNinja.js because that would be destructive and therefore a bad practice. The solution is to push the new data into a copy of the state. Before that can happen, the new ninja will need its own i.d. in the new list of ninjas. The Net Ninja adds a line in __addNinja__ that gives the new ninja a new i.d. that React will turn into that ninja’s key in the DOM. He creates a new array in __addNinja__ that gets its elements from the state with a spread operator. Having this new array allows us to pass in the new ninja from the parameter “ninja.” On the next line, he uses __setState__ to pass the new ninja into the new array as a property.

In the video, the Net Ninja tests the new function, and it works. The page displays the new ninja that he enters with the with the form. It also worked on my own app. I noticed something that he doesn’t mention, which is that the i.d. for the newly created ninja is a zero with many digits after the decimal point. This is the expected result of __Math.random()__ and also not an integer like the i.d.’s for the other ninjas. This reflects the fact that in a real app, the i.d. would likely be a large hash of random characters pulled from a database like the firebase database I used in other projects.