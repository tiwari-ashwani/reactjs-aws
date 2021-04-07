import React, { Component } from 'react'

//Undestructured code
// class GreetClass extends Component {
//     render() {
//         return (
//             <h1>
//                 I am {this.props.name} from {this.props.place}
//             </h1>
//         )
//     }
// }

//Destructured code
class GreetClass extends Component {
    render() {
        const {name, place} = this.props
        //const{state1, state2} = this.state
        return (
            <h1>
                I am {name} from {place}
            </h1>
        )
    }
}

export default GreetClass