# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 20 - Recap & Virtual DOM

YouTube link: https://youtu.be/NFYJZyZIa70

![Ninjas app](https://user-images.githubusercontent.com/29614473/62326174-52c5cc00-b462-11e9-8daf-a07ea813439d.png)
The structure of the app currently uses a container component that has a state consisting of an array of “ninjas,” which could be game characters or whatever. The container component, App.js, passes that array as a prop to a UI component, Ninjas.js, which then cycles through the array and outputs the ninjas to the DOM using a JSX template to provide HTML code for each ninja. App.js also contains another component, addNinja.js, which is another container component that contains a form. The user enters information for creating a new ninja into the form and clicks on a button. This fires a function passed down as a prop to addNinja.js from App.js. The function takes the new ninja and passes it App.js, where it gets added to the array of ninjas in the state of App.js. When that state changes, the ninjas prop gets updated, and this in turn causes the state in Ninjas.js to get updated, which causes it to re-render the template. This puts the new ninja on the web page along with the ones that were already there.
![Ninjas app deleteNinja](https://user-images.githubusercontent.com/29614473/62326257-84d72e00-b462-11e9-9af7-a300c02bc842.png)
Ninjas.js will also re-render the page when a ninja gets deleted. The __deleteNinja__ function in App.js gets passed down to Ninjas.js when a user clicks on the “Delete ninja” button. The function passes the i.d. of the ninja you want to delete and __deleteNinja__ filters through a new array of ninjas so it can exclude the deleted ninja from the new array. This updates the prop, which causes Ninjas.js to re-render the ninjas.
![Recap   Virtual DOM](https://user-images.githubusercontent.com/29614473/62326313-a33d2980-b462-11e9-8c80-93887f3335e0.png)
Behind the scenes, all these events occur within the __virtual DOM__. The Ninjas.js UI component is constantly updating the JSX template while it receives new versions of the props. When ninjas are removed or added to the state of the root component, App.js, React makes a new virtual DOM out of it that is a JavaScript representation of the template and compares it to the current virtual DOM that represents the actual DOM in the browser. This will cause the current virtual DOM to update its data, and this change will be rendered to the browser. Only those differences will be re-rendered. The new virtual DOM becomes the current virtual DOM, restarting the cycle. This cycle happens every time there is a change in the state.
