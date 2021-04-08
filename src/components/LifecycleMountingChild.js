import React, { Component } from 'react'

class LifecycleMountingChild extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('LCMC constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LCMC getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LCMC componentDidMount')
    }

    render() {
        console.log('LCMC Render')
        return (
            <div>
                LCMC Render
            </div>
        )
    }
}

export default LifecycleMountingChild
