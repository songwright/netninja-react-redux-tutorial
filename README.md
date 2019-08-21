# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 34 - Introduction to Redux

YouTube link: https://youtu.be/HKU24nY8Hsc

In the video, the Net Ninja explains Redux, which is a central data store for all of our application data. Any component can get access to this central data store. This makes state management easy.

Redux

#	Central data store for all app data
#	Any component can access data from it
#	Makes state management easy

![Redux](https://user-images.githubusercontent.com/29614473/63467438-540f6680-c41a-11e9-94da-9ab289b0263b.png)

In this scenario, the data for a blog would be stored in Redux. To update the data, a user would put data in through the sidebar, which would store it in Redux, and then Redux would update the blog. This centralizes the exchange of data between components. It is simpler and safer than passing data directly between components, which could result in the unnecessary duplication of data.

![Redux with reducer](https://user-images.githubusercontent.com/29614473/63467447-570a5700-c41a-11e9-90a1-3716cb72651b.png)

To get data from Redux, a component “subscribes” to changes to that data in Redux, and then Redux passes that data to the component in the form of __props__. A component doesn’t send data directly to Redux. It uses an “action” that it passes to the Reducer. An action describes what the component wants to change. The action can have a “payload,” which is the data that the component actual wants to change. The Reducer then takes the data and updates the central state in Redux.
