# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 19 - Deleting Data

YouTube link: https://youtu.be/UmuLW78biBw

Now that we have a form for adding ninjas, we will need a way to delete ninjas. In the video, the Net Ninja adds a new arrow function in App.js called __deleteNinja__ that uses __id__ as a parameter. In the Ninjas.js file, he adds a “Delete ninja” button to the JSX block. The button’s __onClick__ value is __deleteNinja(ninja.id)__, but the Net Ninja points out in the video that this won’t work. The __deleteNinja__ function will be invoked automatically when the page loads, and that will result in deleting the ninja. The simple solution is to surround __deleteNinja(ninja.id)__ with an anonymous function. In the video, he uses an arrow function.

`<button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>`

Now, the __deleteNinja__ function will only fire when the outer function, i.e., the arrow function, is invoked, and that only happens when you click on the button. In the video, he shows that the new “Delete ninja” button now appears on each ninja. He creates a new ninja and uses the button to delete it. He then points out that deleting a new ninja is not the same as deleting one from the state in the containing component, App.js. The new ninja exists in a new array created in the __addNinja__ function. The other ones exist in the state of App.js. To delete one of them, it is necessary to create a non-destructive method that leaves the original state intact. The Net Ninja creates a new array in __addNinja__ by using the __.filter__ method to filter through the state and create a new array that does not include the deleted ninja. The __.filter__ contains a callback function that checks if the ninja i.d. that was passed in does not exist in the state. Whenever the function __returns__ true, it puts a ninja that *does* exist in the state into the new array if it *does not* match the i.d. of the passed in ninja.

`return ninja.id !== id;`

In this way, we delete the clicked-on ninja non-destructively, since it is the only the data in the new “ninjas” array that gets changed. Note that the value of __ninja.id__, shown above, comes from the state, which the function is cycling through, while the value of __id__ comes from the ninja that the user clicked on. The Net Ninja completes the function by adding a new line with __this.setState__ so that it changes the new array, which then gets rendered to the web page.
