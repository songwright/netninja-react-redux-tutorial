# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 32 - Route Parameters (part 2)

YouTube link: https://youtu.be/hPfOc15r_lc

In the app, when we click on the link to the About page or the Contact page, one of the posts gets rendered beneath the page’s text. The post component is getting tacked on to the end of the other component because URL for the page matches the __Route__ in App.js for the Contact page, but it also matches the __Route__ for “/:post_id”. Nothing is restricting the “/contact” part of the URL from being the i.d. of a post, so the app is interpreting “/contact” as a post i.d. and the post that was most recently rendered stays on the web page. The most efficient way to combat this is with a <Switch> tag. In the video, the Net Ninja adds __Switch__ to the list of tags to be imported from the router in the App.js file.

`import { BrowserRouter, Route, Switch } from 'react-router-dom'`

Next, he wraps the __Routes__ in the App.js file with a `<Switch>` tag. Now, only one of the __Routes__ will take precedence. Two Routes cannot match at the same time. When the app goes through the stack of __Routes__, it will match the first one that it can and then stop looking for matches. Without the `<Switch>` tag, the app would try to match as many routes as it could find.
