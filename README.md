# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 21 - CSS Files

YouTube link: https://youtu.be/IZ34vkfr97s

There are a few ways to use CSS in React. One of them is to create a CSS file for each component. In the video, the Net Ninja creates a file called Ninjas.css that contains CSS code for the Ninjas component. In the example, he makes a body style with a pink background.
```
body {
    background: pink;
}
```
In Ninjas.js, he adds a new import line to import the CSS file.

`import './Ninjas.css'`

The CSS will be imported into the entire app, not just the Ninjas template. The whole page will be pink. If you put a style for the form in the Ninja.css file, the style will appear on the form. It doesn’t have to be imported into the form component directly.

React has a special feature that automatically adds vendor prefixes to the style. For example, the body style above would get prefixes for particular browsers.
```
body {
    background: pink;
    -webkit-transition: all 1s;
    -o-transition; all 1s;
    transition: all 1s;
}
```
There are other ways to use CSS in React, including using modules. There is more information about modules at this link:

https://blog.pusher.com/css-modules-react/
