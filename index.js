//There is need to access the root element ID do the JS file. After this we can use ReactDOM.render
const reactContentRoot = document.getElementById('root');
const elementNew = document.getElementById('newElement')
const listItems = document.getElementById('selectedElements')
const jsxElement = document.getElementById('jsxElement')
const returnElement = document.getElementById('returnJsx') 
/*
*Basically after importing the react script tags, it happens that the browser will download all the required react elements
for the react abd rge reactdom */

console.log(React)
console.log(ReactDOM)

//This will put the statement inside the div in the empty div with the ID of 'root'
ReactDOM.render('Hello, This is REACTHTML', reactContentRoot)

//React is a library that allows one to cleate react elements
const myElement = React.createElement('li', null, 'item1')
ReactDOM.render(myElement ,elementNew)

//inside an element created by react, we can add a new element inside it
const arraylist = React.createElement('ul', {} ,[
React.createElement('li', null,'List item one'),
React.createElement('li', {}, 'List item two')
])
ReactDOM.render(arraylist, listItems)

//The above code can be repricated using JSX in React. This converted to the above code using the Babel JS compiler
const myNewItem = 'List item three'
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

/*Components of react are quite simple. It is a JS function that returns a JSX(a react element).

*JS funtion
function App(){
    
}
*/

//Arrow function
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