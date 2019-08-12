# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 31 - Route Parameters (part 2)

YouTube link: https://youtu.be/hPfOc15r_lc

Currently, the i.d. for a post is a random string that you type at the end of the URL in the browser. The goal in this lesson is to get the app to show an individual post when you click on the title of a post in the list of posts that the Home page displays. To do this, we will create a `<Link>` tag whose __to__ property will point at the URL with a forward slash and the post i.d. In the video, the Net Ninja adds an __import__ line for a router __Link__ in Home.js.

`import { Link } from 'react-router-dom'`

In the JSX block below that, he surrounds the `<span>` tag with the post title with a `<Link>` tag. The __to__ for the `<Link>` tag will be a combination of a forward slash string and the value of __post.id__. Now The home page shows the titles of the posts in a blue color to indicate the presence of the links. When you click on the title link, the browser shows the i.d. number of the post from the __props__ object. This number is also populated at the end of the URL after the forward slash.

The next task is to render the content of the post when you click on the link instead of showing the i.d. number. In the Post.js file, he adds a line to import Axios. In the __componentDidMount__ function, he adds a line for Axios to get a post from the jsonplaceholder website, adding the i.d. number at the end in order to get the individual post with that i.d. number. He changes the __id__ property in the __state__ from __id__ to post so that the app will get the data for the post from props. This means that the __setState__ that is currently getting the __id__ from __props__ is no longer needed. To get the data for each post, the Net Ninja chains a __.then__ after the __axios.get__. This __.then__ uses __this.setState__ in an arrow function to assign the __data__ property from the response to the __post__ property in the __state__. He uses __console.log__ to show in the browser which post gets its data logged in to the console. To output that information, he creates a ternary operator in the __render__ function that returns a JSX block if there is a post or a text message if there is no post. The JSX block has a header containing a variable for the title of the post and a paragraph containing a variable for the body of the post. The ternary operator is contained in a constant called __post__. The __return__ function returns that variable to the render function.

After this code compiles, the web page shows the list of posts on the home page as before, but now, when you click on a title of a post, the browser will show the title and body of that post.