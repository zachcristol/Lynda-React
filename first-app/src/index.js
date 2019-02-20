// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();




// React library
import React from 'react'
// gives us the ability to render react to the dom
import ReactDOM from 'react-dom'


var style = {
    backgroundColor: 'Orange',
    color: 'white',
    fontFamily: 'Arial'
}


// https://reactjs.org/docs/react-api.html#createelement
// Creates a react element
const title1 = React.createElement(
    'h1', // type
    {id: 'title', className: 'header', style}, // props
    'Hello World' // children
)


const title2 = React.createElement(
    'ul', // type
    {id: 'title', className: 'header', style}, // props
    React.createElement(
        'li',
        {},
        'item on list'
    )
)


// // https://reactjs.org/docs/react-dom.html#render
// // Render the react element
// ReactDOM.render(
//     title2, // What do you want to render
//     document.getElementById('root')
// )

ReactDOM.render(
    <div style={style}>
        <h1>Hello there</h1>
        <p>here we go</p>
    </div>,
    document.getElementById('root')
)

// copy new-thing
// push "new dir"



















