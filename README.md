# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 42 - Blog Detail Page

YouTube link: https://youtu.be/40pWMVMnftc

The Post component is now able to retrieve data from the Redux store. What if we want to change the data by deleting a post? As in previous tutorials, we’ll have to dispatch an action to change the data in the store. The action will carry a payload, in this case the __id__ of the post we want to delete. This time, we’ll make a function that maps a dispatch to __props__. In the video, the Net Ninja creates a new function in Post.js called __mapDispatchToProps__. This function returns the post object with a method called __deletePost__ which uses the __id__ of the post. He inserts the name of __mapDispatchToProps__ in the export line at the bottom so that it gets wrapped in the __connect__ function. In the JSX block for the post, he adds a button called “Delete Post.” The __onClick__ attribute for this button uses a new function which he installs above the __render__ function called __handleClick__, which gets the __id__ from the post.

In the rootReducer.js file, the Net Ninja adds an __if__ statement that tests for an action of type ‘DELETE_POST’, which sets up a __let__ statement called __newPosts__ that uses the __.filter__ method to create a new array that filters out posts in the store that have been deleted, then overwrites the __posts__ property with __newPosts__. Now, when you click on the Delete Post button, the post is deleted. This action leaves the message “Loading post …” on the web page. In the video, the Net Ninja adds a line to __handleClick__ in Post.js that redirects the page back to the home page after a post is deleted.

`this.props.history.push('/');`