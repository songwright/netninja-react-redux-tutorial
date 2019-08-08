# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 25 - The React Router

YouTube link: https://youtu.be/QUz3k2O3ZJU

In the video, the Net Ninja points out that we have been making apps with just one page, whereas most websites have several pages. React apps are single-page apps, meaning that the sever sends only the index.html page to the user.

![React router](https://user-images.githubusercontent.com/29614473/62727290-02082300-b9ce-11e9-9d8a-b9d8529dda98.png)

How then can we add more pages to a single-page app? When a user gets a React app, React will setup a home component and inject it into the root component, App.js. When the user sends a request from a link on this home component, say for an About page, the React router will intercept the request. Instead of going to the server to get the About page, the React router will inject the About page into the home component.

![React home component](https://user-images.githubusercontent.com/29614473/62727348-28c65980-b9ce-11e9-84e5-3980e7581210.png)

In the video, the Net Ninja deletes the Todo app and creates a new React app called “poketimes.” He inserts the Materialize CSS link into the index.html file and then deletes some files: App.css, App.text.js, and the logo. In the App.js file, he empties out the contents of the and deletes the lines referring to the deleted files. Next, he creates JSX code for three components, one each for a Home page, an About page, and a Contact page. In his file structure, he makes a new folder in the “src” folder called “components” and puts the new component files, Home.js, About.js, and Contact.js, in there. He codes the Home.js file first. This is a functional component. He uses an arrow function to store a function that __returns__ a div with a generic text JSX block. Next, he copies and pastes all this code into the new About.js file. In Visual Studio, he right-clicks on the keyword “Home” and select “Change all occurrences” to change all the “Home” keywords to “About” at the same time. (You can also use the keyboard shortcut Ctrl-F2.) The new About.js file is now ready to be saved. He does the same thing to fill out the new Contact component.

Next, the Net Ninja creates the Navbar.js file. This is also a functional component. The arrow function in this file __returns__ JSX code for a <nav> element that uses Materialize CSS styles to make it look like a navbar. He makes a div container that contains a linked title and a list of links to the Home, About, and Contact pages. In the App.js file, he inserts a line at the top that imports the navbar and then puts a navbar tag in the JSX block below.

The links in the navbar currently show the URL’s for those links when you click on them, but not the actual content from the components. To show the content, you need the React router. In the video, the Net Ninja opens a terminal in Visual Studio Code and types a command in the terminal for installing the router: npm install react-router-dom. In the App.js file, he inserts a line for importing the router.

`import { BrowserRouter, Route } from 'react-router-dom'`

In the __render__ function, he surrounds the div with a <BrowserRouter> tag. He puts the routes for the components below the Navbar tag in the JSX block. Each component needs to be imported, so he adds lines at the top for importing each component. (Sidenote: He uses Shift+Alt+DownArrow to copy lines down in Visual Studio Code.) Now the links will show the content of each component, but the About and Contact pages also show the content of the Home page on top of the page as well. This is because React sees the URL as being in a subset route of the home page component, i.e., the forward slash “/”. You can fix this by changing the link in the App.js file to “/home”. The About and Contact pages will then show only the content for their own pages. The Home page however, will be blank. That’s because it is now showing just the root “/” and not the home page. You can fix this by changing the link in the Navbar.js file to “/home”. Another way to fix this problem is to use the “/” link as before in Appjs and Navbar.js, but use the keyword __exact__ in the Route tag for the home component in App.js.

`<Route exact path='/' component={Home} />`

All the links work correctly now. The only remaining problem is that when you click on a link, the whole page reloads. It’s making a request to the React server each time, but this is not necessary. We can instead get React to intercept each page request and load in only the component.
