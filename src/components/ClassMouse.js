import React, { Component } from 'react'

class ClassMouse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            xPosition: 0,
            yPosition: 0
        }
    }

    logMousePosition = e => {
        this.setState({
            xPosition: e.clientX,
            yPosition: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h2>CLASS VERSION</h2>
                X-Position :: {this.state.xPosition} || Y-Position :: {this.state.yPosition}
            </div>
        )
    }
}

export default ClassMouse