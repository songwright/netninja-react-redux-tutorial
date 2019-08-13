# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 33 - Importing Images

YouTube link: https://youtu.be/mfNQ_RPegAE

In the video, the Net Ninja tells you to download the pokeball.png file from his repository.

https://github.com/iamshaunjp/react-redux-complete-playlist/blob/lesson-33/poketimes/src/pokeball.png

This file goes in the “src” directory. He adds a line to the Home.js file that imports this image.

`import Pokeball from '../pokeball.png'`

He also uses an `<img>` tag in the post JSX with the __src__ equal to a variable called Pokeball.

`<img src={Pokeball} alt="A pokeball" />`

Next, he creates a class for the image, making it the grandchild of the __.home__ and __.post__ class. This makes it necessary for him to insert a new home class in the `<div>` container. The new __img__ style has new position and opacity values. He changes the __.home__ and __.post__ class so that it takes out the overflow of the image and also adds a style to make the title of the post red.
