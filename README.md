# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 11 – Single Page Apps

YouTube link: https://youtu.be/aVKaEbDRA7I

Single Page Apps

*	React apps are typically SPA’s
*	Only ever one HTML page served to the browser
*	React then controls what a user sees on that page

![Multi Page Apps](https://user-images.githubusercontent.com/29614473/61482655-02257d80-a950-11e9-93ac-44944358723a.png)

React dynamically updates the page the user is looking at. Normally, a user clicks to open a page, which sends a request to a server for that page. If the user clicks on a link, a new request goes to a server which sends a new page to the user. This is a typical multi-page configuration. With React, requests for new pages go to the React app, which send the new page to the user from the local React component without sending a request to a server. This makes the application faster.

In the video, the Net Ninja looks at the app files in Visual Studio Code. In the “public” folder, he opens the index.html file. This is the single page of the single page app. React will inject components dynamically into the root div` <div id=”root”></div>`. The components are created in the “src” folder in the App.js file. In the video, the Net Ninja talks about how this is a class-based component, but the file in my app does not start out with the __App__ keyword. The first line in App.js looks like this:

`function App() {`

There is a render function in the video, but this app does not have a render function. The JSX template looks the same as in the video. At the end of App.js, the app gets exported so it can be rendered to the DOM.

`export default App;`

It will be rendered to the index.html file from the index.js file. In the video, the file ends with __registerServiceWorker();__, but in my file, it ends with __serviceWorker.unregister();__. Some comments above the line say that you can change __unregister()__ to __register()__ if you want the app to work offline. In the video, the Net Ninja opens a terminal and changes to his app directory so opened a terminal and typed the commands:

```
cd react-app
npm start
```

This started a local development server. The server opened a new page in my browser at localhost:3000. The new page is a dummy app intended to be used as a starting point. The page is the component that has been injected into the DOM. This is all driven by the component in App.js.

In the video, the Net Ninja deletes the App.css file and the reference to it in App.js that reads __import ‘./App.css’;__. This file is not needed. The test file App.test.js is also not needed, so he deletes that, too. He also deletes logo.svg and the references to logo.svg in App.js. The result is a simplified page in the browser with no logo or styles. In the video, the Net Ninja deletes the contents of the component in App.js and writes a couple of new lines for the component, a header and a <p> tag. The new component now appears in the web page, served by the development server.