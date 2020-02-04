# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 43 - Action Creators

YouTube link: https://youtu.be/sY1mPVaUYds

In the mapDispatchtoProps function in Post.js, the deletePost function dispatches an action by creating an action directly inside the dispatch method. This works fine, but it's also possible to use a separate action creator in order to create a better separation of concerns and make actions more reusable. In the video, the Net Ninja creates an Actions folder within the src folder and creates a new file in the Actions folder called postActions.js. This contains a function that returns an object containing the action that you would want to return from a component.

```
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}
```

Next, the Net Ninja imports the `deletePost` function using destructuring in Post.js. 

`import { deletePost } from '../actions/postActions';`

In `mapDispatchToProps`, he calls the `deletePost` function in the dispatch.

`deletePost: (id) => { dispatch(deletePost(id)) }`

The function works the same way that it did before. The difference now is that other functions in other components could also use the `deletePost` function in the same way.