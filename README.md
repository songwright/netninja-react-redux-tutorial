# Complete React Tutorial (with Redux)

Notes on The Net Ninja’s Complete React Tutorial (with Redux) on YouTube.

## Lesson 4 - React Components

YouTube link: https://youtu.be/Fis_Q3rkgtM

The Net Ninja creates a component that takes control of the new div element in index.html. He uses a JavaScript class in a `<script>` tag. This class-based component uses the __class__ keyword. He gives it the name “App” because the div uses the i.d. “app”. The keyword __React__ gives the component access to the react object through the connection to the CDN in the first link. The __.Component__ method allows it to inherit the base functionality of a component. This __class__ will represent the component in this page. Class-based components must have at least one __render()__ function in them. This function will render the template. Typically, a __return__ line contains the JSX template. The JSX code looks like HTML, with some differences. The Net Ninja creates a template with a header element as an example. One limitation is that there is only one root element in the template. The element can have children but not siblings. There can only be one root element. Another limitation is that JSX cannot use the word “class” for the class of an element since JavaScript uses that keyword already. Instead, the keyword __className__ determines the class of an element.

The second CDN link for React can use the components to render elements to the DOM. The Net Ninja uses __React.DOM.render()__ to render the component. The component is passed in as __App__ in a self-closing tag. He uses __document.getElementById(‘app’)__ to tell React to render the component to the div with that i.d.

`ReactDOM.render(<App />, document.getElementById('app'));`

When he first tries to serve the file through Live Server, it fails. The browser doesn’t recognize the JSX code in the component. That’s because it needs to be transpiled with Babel. From https://babeljs.io/setup he clicks on “In the browser” and gets a `<script>` tag for babel-standalone that will transpile the component code. This link goes in the header of index.html before the CDN links. He also puts __type="text/babel"__ in the `<script>` tag for the component. Opening the index.html file with Live Server results in the successful display of the page. Inspecting the page in dev tools reveals that the component is nested inside the div.

The Net Ninja inserts a `<p>` element to make that point that components can render dynamic content such as random numbers. The element shows a new random number each time the page refreshes.
