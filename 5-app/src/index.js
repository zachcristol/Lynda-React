// Changed import statment
import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'


let person = {
    name: "zach",
    age: 40,
    height: 8,
    aspirations: "don't matter"
}

const calcIq = (one, two) => {
    return one * two
}

// Function components
const PersonComponent = ({name, age, height, aspirations}) => {
        return(
            <section>
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>height: {height}</p>
                <p>aspirations: {aspirations}</p>
                <p>Iq level: {calcIq(age, height)}</p>
            </section>
        )
}

render(
    <PersonComponent name={person.name} age={person.age} height={person.height} aspirations={person.aspirations} />
    , 
    document.getElementById('root') // Where do you want to render (public/index.html)
)