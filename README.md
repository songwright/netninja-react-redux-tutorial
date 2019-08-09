# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 27 - Programmatic Redirects

YouTube link: https://youtu.be/GiaFedx5cfA

In the video, the Net Ninja says that it is possible to programmatically redirect a user to a URL. In the Contact.js file, he inserts __props__ as a parameter in the __Contact__ arrow function. This adds information to the router about the Contact component through __props__. He adds a line to the function that puts __props__ in the console. In the browser, when he opens dev tools and clicks on the Contact link, there is a __props__ object logged into the console. The router has automatically added information to the object such as the history and location of the object. Under "location," the property called “pathname” has the value “/contact.” Under "history," there is a property called “push” which you can use to redirect the browser to a URL. In the Contact.js file, the Net Ninja replaces the __console.log__ with a __setTimeout__ that uses an arrow function as a parameter. The arrow function uses the __push__ property to redirect the browser to the About page after two seconds.

`props.history.push('/about')`

This is a programmatic redirect. It works on the Contact link because that link is set up in Navbar.js as a router link. The Net Ninja adds a __setTimeout__ line to Navbar.js like the one in Contact.js, but this time it doesn’t work. He adds a __console.log__ line in Navbar.js to find out why. In the browser, the console shows that the props object is empty. This is because the Navbar doesn’t have a router link. It needs a higher-order component. The Net Ninja comments out the __setTimeout__ line and adds __withRouter__ to the list of things imported from ‘react-router-dom’ in the Navbar.js file. He also changes the export line to reflect this.

`export default withRouter(Navbar)`

The __withRouter__ higher-order component is wrapping around the Navbar component. This will “supercharge” the Navbar component. Now, whenever you click a link on the Navbar, the __props__ object will appear in the console. In the video, the Net Ninja demonstrates this and then replaces the __console.log__ in Navbar.js with the same __setTimeout__ function that he used in Contact.js. In the browser, the Navbar now redirects to the About page after two seconds.
