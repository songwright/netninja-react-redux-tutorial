# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 40 - Mapping State to Props

YouTube link: https://youtu.be/CZ2qGtAnhoE

Now that the app has access to the store, we need to connect the components to the store. The store in the rootReducer.js file will need to start out with data in its store, so the Net Ninja inserts some objects in the __posts__ array in the store to serve as dummy data. The home component can’t get this dummy data currently because in previous lessons we set it up to use Axios to get dummy data from jsonplaceholder.typicode.com. The Net Ninja deletes the lines in the Home.js file that do this and replaces them with new lines. He gets rid of the __componentDidMount__ block and the __state__ block. We’re not going to be storing the state in the component anymore. Next, he connects the Home.js file to Redux with a higher-order function called __connect__. He imports this in a line at the top of Home.js and also wraps it around __Home__ at the bottom. To get the state from Redux, he defines a constant called __mapStateToProps__ that contains an arrow function which returns __posts__ from the state. This gets passed into __connect__ as a parameter.

`export default connect(mapStateToProps)(Home)`

Since the state in Home.js no longer exists, you have to change __this.state__ in the render function to __this.props__. After the Net Ninja does this, he shows in the video that the app is now showing only the dummy data he just put into rootReducer.js, i.e., the web page is showing data from Redux.
