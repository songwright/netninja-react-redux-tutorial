# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 16 - Conditional Output

YouTube link: https://youtu.be/W--bMoQncPM

Sometimes we only want to show something on a web page based on certain conditions. For example, if in this app you wanted to show only ninjas older than 20, you could use an __if__ statement. In the video, the Net Ninja wraps the JSX block in Ninjas.js in an __if__ statement. This is followed by an __else__ statement returning __null__. His browser now shows only the two ninjas older than 20. He then makes a ternary operator that does the same thing. First, he comments out the JSX with the __if__ statement and then copies and pastes the JSX into the parentheses for the true result in the ternary operator. Then he follows that with a __null__ result.
```
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) ? (
```
This works the same as the __if__ statement.

The Net Ninja ends the video by showing a third method, which involves embedding the JSX in the return statement. The difference is that you don’t need to put it in a constant with __const ninjasList =__. Doing it this way can be confusing, though, so the Net Ninja prefers to put the JSX into a variable.