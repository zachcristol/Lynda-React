// React library
import React from 'react'
// gives us the ability to render react to the dom
import ReactDOM from 'react-dom'

// Specified style
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

// Another react component
const title2 = React.createElement(
    'ul', // type
    {id: 'title', className: 'header', style}, // props
    // Child is a component
    React.createElement(
        'li',
        {}, // No props
        'item on list'
    )
)

// https://reactjs.org/docs/react-dom.html#render
// Render the react element
ReactDOM.render(
    title2, // What do you want to render
    document.getElementById('root') // Where do you want to render (public/index.html)
)