# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 30 - Route Parameters (part 1)

YouTube link: https://youtu.be/Z-CjMnOjg0I

Route parameters are a part of the URL that can change. You can see them on URL’s for individual records such as profile routes. In the examples in the video, the route parameters are the last part of the URL’s that differ from each other after the second slash.

![Route Parameters](https://user-images.githubusercontent.com/29614473/62884301-0a709e80-bceb-11e9-8af8-2c81e7ce67c1.png)

 The first example would show the same profile page for the two users, but the data would be different on each user’s profile page. In the second example, the recipe page would show the same layout but different data for each recipe, based on the route parameter.

 In this lesson, there will be route parameters for each post. The route parameter for a given post will be equal to the i.d. for that post. In this video, the Net Ninja adds a new route in the App.js file for the posts. The path for this route will be a variable so he uses the value “/:post_id”. The colon indicates that this value is a variable. He creates a new component file called “Post.js”. This is a class-based component that returns the route parameter in a heading. For the moment, he uses text instead of a real route parameter in the heading. After saving, the web page will show this text after you change the URL to ‘/12345’ or ‘/’ plus any number. The Props.js file needs to get i.d.’s from the posts to use as route parameters, so the Net Ninja puts a new __componentDidMount__ function in Post.js that assigns a value from the requested object to a variable called __id__. This value comes from a number of levels of properties in the object, __match__, __params__, and __post_id__.

`let id = this.props.match.params.post_id;`

The __post_id__ parameter is grabbing the value of the number that you typed in after the slash in the URL.

He creates a new state in Post.js with a property called __id__ which starts out with a value of __null__. He then uses __this.setState__ in __componentDidMount__ to set the __state id__equal to the __id__ in __componentDidMount__. The result is that when you add a number after the slash in the URL in the browser, that number will appear on the page. The app has taken that number from the __post_id__ parameter as the i.d. of the post and rendered it through the JSX block in Post.js.
