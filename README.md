# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 10 - Create React App

YouTube link: https://youtu.be/5QwNCX3UbXc

Rather than making individual React pages, you can use a package to make an app with multiple pages with a command line tool. This allows you to do things such as use a development server and use JavaScript ES6 features.

Create React App

*	A command line tool to create React apps
    *	Development server
    *	Use ES6 features which are not normally supported
    *	Keep our code modular
    *	Use build tools to create optimized code

This system uses webpack and Babel, and it’s easier than making one page at a time. The Net Ninja shows a link to

https://github.com/facebook/create-react-app

This repository is maintained by Facebook. The README.md contains the following quick overview:

### Quick Overview

```
npx create-react-app my-app
cd my-app
npm start
```

Running these commands in a terminal will create a React app. Node.js version 5.2 or higher must be loaded on your computer. In a terminal on my laptop, I used the command line:

`npx create-react-app react-app`

This made a new app called “react-app”. A new folder appeared in the root directory called “react-app.” I created a __.gitignore__ file to keep this folder out of my own repository. The Net Ninja deleted the index.html file in the root directory so I also deleted my copy of that file. I then used the commands

```
cd react-app
npm start
```

These messages appeared in the terminal:

```
Starting the development server...
Compiled successfully!
You can now view react-app in the browser.
  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.76:3000/
Note that the development build is not optimized.
To create a production build, use npm run build.
```

The app served a new page in my Chrome browser.

When I found a __.gitignore__ file in the react-app folder, I deleted the __.gitignore__ file that I had made.

