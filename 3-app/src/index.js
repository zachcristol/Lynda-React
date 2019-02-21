// React library
import React from 'react'
// gives us the ability to render react to the dom
import ReactDOM from 'react-dom'



// Making a component
class Message extends React.Component {
    // All components have a render method
    // What we want to render to the dom
    render() {
        return (
            <div>
                <h1>Hello errrbody</h1>
            </div>
        )
    }
}

// Making a component that uses props
class PropsMessage extends React.Component {
    render() {
        return(
            <div>
                <h1 style={ {color: this.props.color} }>
                    {this.props.msg}
                </h1>
                <p>Ill check back in {this.props.time} minutes</p>
            </div>
        )
    }
}

// We can render JSX (similar to html)
ReactDOM.render(
    //Render the react component
    // <Message/>
    <PropsMessage color={"blue"} time={50} msg="hello therre thingo"/>
    , 
    document.getElementById('root') // Where do you want to render (public/index.html)
)