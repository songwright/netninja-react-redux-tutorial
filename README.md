# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 26 - Links & NavLinks

YouTube link: https://youtu.be/AILU8hl-dmo

In the video, the Net Ninja points out that when you click on a link, the whole page reloads. It’s making a request to the React server each time. To change this behavior, use a __NavLink__. The Net Ninja adds a line to Navbar.js to import the __NavLink__.

`import { Link, NavLink } from 'react-router-dom'`

In the JXS block, he replaces the anchor tags with `<Link>` tags.

`<li><Link to="/">Home</Link></li>`

Now, when you click on a link, the request does not go to the server and the transition is smoother. You should always use `<Link>` tags in React. When the Net Ninja changes the `<Link>` tag to `<NavLink>` in the JSX, the links work the same in the browser, but now when you inspect a link with dev tools, the link has a new class, “active.” This doesn’t happen with the `<Link>`. This is useful if you want to apply styles to elements with the “active” class.
