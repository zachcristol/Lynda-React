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

// We can render JSX (similar to html)
ReactDOM.render(
    // Render JSX
    <div style={style}>
        <h1>Hello there</h1>
        <p>This is a desciription</p> 
    </div>
    , 
    document.getElementById('root') // Where do you want to render (public/index.html)
)