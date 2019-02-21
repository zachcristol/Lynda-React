
// Changed import statment
import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'


let person = {
    name: "zach",
    age: 40,
    height: 8,
    aspirations: "don't matter"
}


// Because of changed import statment, don't have to have React.
class PersonComponent extends Component {

    // Class function
    calcIq = (one, two) => {
        return one * two
    }

    render() {
        // destructuring person into variables
        const {name, age, height, aspirations} = this.props
        return(
            <section>
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>height: {height}</p>
                <p>aspirations: {aspirations}</p>
                {/* Using class function */}
                <p>Iq level: {this.calcIq(age, height)}</p>
            </section>
        )
    }
}

// We can render JSX (similar to html)
render(
    <PersonComponent name={person.name} age={person.age} height={person.height} aspirations={person.aspirations} />
    , 
    document.getElementById('root') // Where do you want to render (public/index.html)
)