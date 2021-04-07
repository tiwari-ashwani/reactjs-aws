import React, { Component } from 'react'

class GreetClass extends Component {
    render() {
        return <h1>I am {this.props.name} from {this.props.place}</h1>
    }
}

export default GreetClass