# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 41 - Blog Detail Page

Youtube link: https://youtu.be/SoOTQW4-tYk

The web page is showing the posts from the state in a list, but if you click on a post, the view switches to one of the posts from the jsonplaceholder website instead of from the state because it’s still setup to use Axios to __get__ it from that website in the Post.js file. We need to instead connect this component to our Redux store and get that individual post to show on the page. In the lingo of React, it’s a matter of mapping the state to __props__. In the video, the Net Ninja deletes the __state__ and the code block in Post.js that uses the __componentDidMount__ lifecyle hook to __get__ the dummy data from jsonplaceholder.typicode.com and enters code like the __connect__ function from the last lesson. First, he deletes the Axios import line at the top and replaces it with a line that imports __connect__ from Redux. At the end of the file, he wraps __Post__ in the __connect__ function. He creates a function to map the state to __props__ and stores it in a constant called __mapStateToProps__. It takes two parameters, __state__ and __ownProps__. This __ownProps__ parameter is a prop that the function gets from Post.js before React attaches additional props from the Redux store. The __ownProps__ will contain information about the route so it can get the i.d. from the route. Then the i.d. will be used to get information from that particular post from the state in the store. An arrow function in the __return__ function uses the __.find__ method to look for the post with the correct __id__ value and stores it in the __post__ prop.

In the __render__ function, he changes the value of the constant post from __this.state.post__ to __this.props.post__. It is also necessary to change the __state__ keyword to __props__ in the JSX block where there are variable values from the title and body of the post.

`<h4 className="center">{this.props.post.title}</h4>`

The web page now shows the individual post when you click on a link in the home page. The Net Ninja wraps it all up by saying this: “We’ve connected this post details to our Redux store using this [he highlights the __connect__ function in Post.js], and we’ve found that individual post that we want using the __.find__ method, and using the route parameter right here [he highlights the line __let id = ownProps.match.params.post_id;__ in __mapStateToProps__] i.d., and we’ve applied that to a __post__ object on our __props__ so we can use that __post__ object on our __props__ right here [he highlights __this.props.post.body__] to output the data to the screen.”

