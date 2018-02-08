import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a Person! and I am {props.name}, {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;