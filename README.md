# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 22 - Lifecycle Methods

YouTube link: https://youtu.be/iYz2OKWO09U

The Net Ninja discusses component lifecycles using a diagram from this link:

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

A component goes through three phases: mounting, updating, and unmounting.

![React Lifecycle](https://user-images.githubusercontent.com/29614473/62402209-7c065b00-b53b-11e9-8080-2b82ab6bdb82.png)

### Mounting

1.	__constructor__. Optional.
2.	__getDerivedStateFromProps__. For receiving new state objects if needed. Not often used.
3.	__render__. React prepares JSX code for rendering. Required.
4.	__componentDidMount__. Optional. It occurs when the component first mounts. External information from sources such as Firebase may enter the cycle here.

### Updating

1.	__getDerivedStateFromProps__. This triggers when the state updates or when the props get changed.
2.	__shouldComponentUpdate__. Compares current state with new state and old props with new props. Updating and rendering can be prevented by returning false here.
3.	__render__.
4.	__getSnapshotBeforeUpdate__. Get read access to the DOM before the change is actually committed. Current values from the DOM can be entered here, such as the window position.
5.	__componentDidUpdate__. Called after the template is rendered to the DOM. Warning: Updating the state here could cause an infinite loop, so don’t do that.

### Unmounting

React invokes __componentWillUnmount__ immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in __componentDidMount__.

In the video, the Net Ninja inserts a line in App.js using __componentDidMount__ to demonstrate mounting. He uses __console.log__ to log in the console the message “component mounted” when the page loads. The component is only mounted once. Next, he inserts __componentDidUpdate__ with two console logs to show what happens when the state is updated in the page. In the video, he shows that deleting a ninja will cause a log to appear in the console that says, “component updated.” Two objects also appear, one of them empty because the root component doesn’t have props inside it. It passes props to other components. The previous state shows three ninjas. The current state is different from the previous state. Deleting another ninja causes another previous state to appear, showing the absence of the ninja that was deleted last time. Adding new ninjas will cause new ninjas to appear in previous props objects shown in the console.