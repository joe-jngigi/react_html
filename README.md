# Getting Started With React (June 13th 2022)

Checkout this project [React First Project](https://github.com/joe-jngigi/react_html)

Also, check this [Try React locally - Add React to a Website ](https://react.dev/learn/installation#try-react:~:text=Try%20React%20locally,in%20your%20browser!)

When explaining react, we say that it is a set of JS functions that can allow you to create front end reusable UIs and components. The **React** library provides all the set functions that can be used to manipulate how the UI behaves. The React Library can put views to the DOM, mobile apps and the desktop apps. The **`ReactDOM`** and **`ReactNative`** Are used to render the UIs on a screen like the browsers and mobile devices.

With the code below, we can use it to access the HTML container, which is basically marked with `Id`, in this case we give the ID the name `root`. So now using the `reactDOM` function from react, we can now render the UI libraries. To enable all these to work, we have some scripts in the HTML file. These scripts enable you to write React code directly in your HTML page using the development versions of React and React DOM libraries. Normally, we need a JS environment like `node.js`, but we can run bare React.js without node by adding the scripts below, which are available in the React.js Documentation referenced above.

```HTML
<!-- tags am talking about  in the **head**-->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<!-- In the **body** -->
<div id="root"></div>
<div id="newElement"></div>
```

JS File

```JS
const reactContentRoot = document.getElementById('root');
ReactDOM.render('Hello, This is REACTHTML', reactContentRoot)

//React is a library that allows one to cleate react elements
const myElement = React.createElement('li', null, 'item1')
ReactDOM.render(myElement ,elementNew)
```

`React` is a JavaScript library for building user interfaces. `ReactDOM` is the library that interacts with the DOM. React focuses on creating UI components and managing application logic, while `ReactDOM` handles rendering those components to the actual DOM. In simple terms, developers use React to define elements, manage state, and implement lifecycle methods, while `ReactDOM` is specifically used for mounting components to the DOM.

To run the `react` code, we need a transpiler that can compile react code. We use the babel. A transpiler is a tool that converts code written in one programming language into another programming language while maintaining a similar level of abstraction. Since we use `JSX`, we can convert JSX, which is just like HTML. You should note that JSX is not HTML, they just work the like 90% of the time. Babel is a tool that allows developers to write code using the latest version of JavaScript, which may not be supported by all browsers. It is a JavaScript compiler that transforms newer ECMAScript features into older versions of JavaScript that are widely supported across different browsers.

So a list element will be transformed like this. So, in the background, React Uses the babel transpiler to compile the JSX code.

```JSX

// jsx
 <ul>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
</ul>

// Java Script
React.createElement('li', null,'List item one'),
React.createElement('li', {}, 'List item two')
```

## JSX Support Scripts

With the following script, we can use it to compile our JS file by adding it to the header of our HTML file. After which we can now compile the JSX files in `react-html`. You can check out [`@babel/standalone`](https://babeljs.io/docs/babel-standalone#when-not-to-use-babelstandalone).
So this will compile the JSX into JavaScript. When we add this script, we can use the **live server** on **Visual Studio Code** or just right-click on the HTML file and open with default browser. It opens your file on a port.

```HTML
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- We then label our script tag with the type as shown -->
<script type="text/babel" src="./index.js"></script>

```

So now we can render the JSX element in the place of the code below. This code is how we can create elements in React JS

```JS
const arraylist = React.createElement('ul', {} ,[
React.createElement('p', null,'This is not a JSX Element'),
React.createElement('li', null,'List item one'),
React.createElement('li', {}, 'List item two')
])
ReactDOM.render(arraylist, listItems)
```

This is an example of the JSX code; a simplified version of the above code. So before this JSX code is run in the browser, babel will first interpret it into JavaScript.

```JSX
const myJSX = (
    <>
        <p>This is a JSX file</p>
        <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>{myNewItem}</li>
        </ul>
    </>
)
ReactDOM.render(myJSX, jsxElement)
```

So now when it comes to writing a React Component, we can now return the JSX inside a function, and now we can return the function as a JSX argument in the `reactDOM.render` like shown below. Note the similarities with the above code. You can just Say **`<App />`** or the function **`App()`**

```TSX
const App = () =>{
    let userName = 'Joseph N'
   return(
    <>
    <big>RETURNING JSX</big>
    <p>This is an arrow function. They are used to return JSX in react</p>
    <p>my name is {userName}</p>
    </>
   )
}
ReactDOM.render(<App/>, returnElement)
```
