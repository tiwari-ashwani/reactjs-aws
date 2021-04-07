import React from 'react'

// function Greet(){
//     return <h1>Hello Ashwani !!</h1>
// }

//const Greet = () => <h1>Hello Ashwani !!</h1> //without props

//Normal code for Props
// const Greet = (props) => {
//     console.log(props)
//     return <h1>Hello {props.name} from {props.place}!! </h1> //with props
// }

//Destructring props code in the parameter
// const Greet = ({name, place}) => {
//     console.log(name + ' - - '+ place)
//     return (
//     <h1>
//         Hello {name} from {place}!! 
//     </h1> //with props
//     )
// }

//Destructring props code in the function
const Greet = props => {
    const {name, place} = props
    //console.log(name + ' - - '+ place)
    return (
    <h1>
        Hello {name} from {place}!! 
    </h1> //with props
    )
}
export default Greet