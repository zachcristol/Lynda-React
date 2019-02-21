import React from 'react'
import  {render} from 'react-dom'


// Just some styling
const style = {
    color: "green",
    margin: "50px",
    padding: "50px",
    borderWidth: "5px",
    border: "solid",
    borderColor: "black",
    borderRadius: "10px"

}


// Book component is nested in Library
const Library = () => {
    return (
        <div style={style} >
            <Book title="Big lebowskie" author="Tomatoes" pages={666}/>
            <Book title="dsfli" author="sdfds" pages={233234} />
        </div>
    )
}

// Generic book that displays what it is given
const Book = ({title, author, pages}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>author: {author}</p>
            <p>{pages} pages</p>
        </section>
    )
}




// Abstract away the data of a person
let peopleList = [
    {"name": "zach", "age": 22},
    {"name": "allen", "age": 72},
    {"name": "hadi", "age": 21},
    {"name": "anjuli", "age": 23},
    {"name": "ben", "age": 448}   
]

// This is just rendering a person for every element in people (passed as peopleList in render())
const People = ({people}) => {
    return (
        <div style={style}>
            {/* For every person in people -> make a <Person/> */}
            {people.map(
                (person, key) => 
                    <Person 
                        key = {key} //Need (not required) to have this because we are accessing a list
                        name = {person.name} 
                        age = {person.age} />
            )}
        </div>
    )
}

// How a person is structured
const Person = ({name, age}) => {
    return (
        <div style={style}>
            <h1>{name}</h1>
            <p>{age}</p>
        </div>
    )
}



render(
    <div>
        <Library />
        <People people={peopleList} />
    </div>,
    document.getElementById('root') // Where do you want to render (public/index.html)
)