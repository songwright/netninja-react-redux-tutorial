# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 2 – How React Works

YouTube link: https://youtu.be/pKYiKbf7sP0

Components are the lifeblood of React. You could have components for a nav bar, a search box, and a footer. It takes the components and creates a JavaScript representation of the DOM called “Virtual DOM.” It then renders the actual DOM in the browser from the virtual DOM. Changes in the components go to the virtual DOM. React compares the new virtual DOM in the background to the old virtual DOM that it sent to the browser to create the real DOM. It will then update only the part of the real browser DOM that got changed in the virtual DOM. This happens every time a component gets a change.

### Components & Templates:
* Components look like HTML templates (actually JSX)
* They can contain “state” (data or UI state)
* They also can contain JavaScript for functionality

Example:

class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  }
  render(){
    return(
      <div className="app-content">
        <h1>Hello, ninjas!</h1>
        <p>My name is: { this.state.name } and I am { this.state.age }</p>
      </div>
    )
  }
}