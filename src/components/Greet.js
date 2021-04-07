import React from 'react'

// function Greet(){
//     return <h1>Hello Ashwani !!</h1>
// }

//const Greet = () => <h1>Hello Ashwani !!</h1> //without props

const Greet = (props) => {
    console.log(props)
    return <h1>Hello {props.name} from {props.place}!! </h1> //with props
}

export default Greet